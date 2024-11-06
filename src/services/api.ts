import * as APISauce from 'apisauce';

// service
import {accessTokenStore, refreshTokenStore} from './auth/credential.store.ts';
import {AuthService} from './auth/auth.service.ts';

export const baseURL = 'https://dummyjson.com';

// Create the API instance
const apiInstance = APISauce.create({
  baseURL,
});

// Add a request transform to include the access token
apiInstance.addAsyncRequestTransform(async _request => {
  /**
   * TODO - implement token cache mechanism here
   * avoid get token as a promise each requests.
   */
  const token = await accessTokenStore.get();
  __DEV__ && console.log('Credentials::', !!token);
  apiInstance.setHeader(
    'Authorization',
    token ? `Bearer ${token.password}` : '',
  );
});

apiInstance.axiosInstance.interceptors.response.use(
  response => {
    __DEV__ && console.log('API monitor Response::', response.data);
    return response;
  },
  async error => {
    const originalRequest = error.config;
    const isUnAuthorize = error.status === 401;
    const isRetry = originalRequest._retry;

    if (isUnAuthorize && !isRetry) {
      /** Mark: the request as retried to avoid infinite loops. */
      originalRequest._retry = true;
      return handleRefreshToken(error);
    }
    /** For all other errors, return the error as is. */
    return Promise.reject(error);
  },
);

const handleRefreshToken = async (error: any) => {
  try {
    __DEV__ &&
      console.log('RefreshToken::', 'Retrieve the stored refresh token');
    const token = await refreshTokenStore.get();
    if (!token) {
      __DEV__ && console.log('Can not get refresh token store');
      throw error;
    }
    const newToken = await AuthService.postAuthRefresh(token.password);
    const accessToken = newToken?.accessToken;
    const refreshToken = newToken?.refreshToken;
    if (!accessToken || !refreshToken) {
      __DEV__ &&
        console.log(
          'Can not get access and refresh token api from auth refresh',
        );
      throw error;
    }

    apiInstance.setHeader('Authorization', accessToken);
    await accessTokenStore.set(accessToken);
    await refreshTokenStore.set(refreshToken);

    __DEV__ &&
      console.log('Instance: Retry the request with the new access token.');
    return apiInstance.axiosInstance(error.config);
  } catch (refreshError) {
    /**
     * Handle refresh token errors by clearing stored tokens,
     * and redirecting to the login-template page.
     * TODO redirect = '/login';
     */
    console.log('Token refresh failed:', refreshError);
    await refreshTokenStore.remove();
    await accessTokenStore.remove();
    return Promise.reject(refreshError);
  }
};

export {apiInstance};
