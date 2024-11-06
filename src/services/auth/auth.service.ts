import type {IToken, IUser, IUserInfo, TLogin} from './auth';

import {apiInstance} from '../api.ts';
import {accessTokenStore, refreshTokenStore} from './credential.store.ts';

const Service = {
  postLogin: async (data: TLogin): Promise<IUser | null> => {
    const response = await apiInstance.post(
      '/auth/login',
      Object.assign({}, data, {expiresInMins: 1}),
    );
    return response.ok ? (response.data as IUser) : null;
  },
  getUserMe: async (): Promise<IUserInfo | null> => {
    const response = await apiInstance.get('/auth/me');
    return response.ok ? (response.data as IUser) : null;
  },
  postAuthRefresh: async (token: string): Promise<IToken | null> => {
    const response = await apiInstance.post<IToken>('/auth/refresh', {
      refreshToken: token,
      expiresInMins: 1,
    });
    return response.ok ? (response.data as IToken) : null;
  },
  logout: async (): Promise<void> => {
    await accessTokenStore.remove();
    await refreshTokenStore.remove();
  },
};

export const AuthService = Object.freeze(Service);
