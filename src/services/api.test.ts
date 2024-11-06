import {apiInstance, baseURL} from './api.ts';
import {refreshTokenStore} from './auth/credential.store.ts';
import {AuthService} from './auth/auth.service.ts';

jest.mock('./auth/credential.store.ts', () => ({
  accessTokenStore: {
    set: jest.fn(),
    get: jest.fn().mockResolvedValue({password: 'testToken'}),
    remove: jest.fn(),
  },
  refreshTokenStore: {
    set: jest.fn(),
    get: jest.fn().mockResolvedValue({password: 'testToken2'}),
    remove: jest.fn(),
  },
}));

jest.mock('./auth/auth.service.ts', () => ({
  AuthService: {
    postAuthRefresh: jest.fn(),
  },
}));

describe('API instance', () => {
  it('should create instance', () => {
    expect(apiInstance.getBaseURL()).toEqual(baseURL);
  });

  it('should request success', async () => {
    const res = await apiInstance.get('/test');
    expect(res.status).toEqual(200);
  });

  it('should request failure', async () => {
    const res = await apiInstance.get('/user/me');
  });

  it('should request failure without refresh token store', async () => {
    jest.spyOn(refreshTokenStore, 'get').mockResolvedValue(false);
    const res = await apiInstance.get('/user/me');
  });

  it('should request failure without refresh token api', async () => {
    jest.spyOn(refreshTokenStore, 'get').mockResolvedValue({
      password: '1',
    });

    jest.spyOn(AuthService, 'postAuthRefresh').mockResolvedValue({
      refreshToken: '1',
      accessToken: '2',
    });

    const res = await apiInstance.get('/user/me');
  });
});
