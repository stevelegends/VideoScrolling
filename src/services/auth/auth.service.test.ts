import MockAdapter from 'axios-mock-adapter';

import {apiInstance} from '../api.ts';
import {IToken, IUser} from './auth';
import {AuthService} from './auth.service.ts';
import {accessTokenStore, refreshTokenStore} from './credential.store.ts';

jest.mock('./credential.store.ts', () => ({
  accessTokenStore: {
    set: jest.fn(),
    get: jest.fn(),
    remove: jest.fn(),
  },
  refreshTokenStore: {
    set: jest.fn(),
    get: jest.fn(),
    remove: jest.fn(),
  },
}));

const mock = new MockAdapter(apiInstance.axiosInstance);

describe('AuthService', () => {
  describe('Login', () => {
    it('should login success', async () => {
      mock.onPost('/auth/login').reply(200, {
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
      } as IUser);
      const res = await AuthService.postLogin({
        username: 'test',
        password: 'password',
      });
      expect(res).toMatchObject({
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
      });
    });

    it('should login failure', async () => {
      mock.onPost('/auth/login').reply(403);
      const res = await AuthService.postLogin({
        username: 'test',
        password: 'password',
      });
      expect(res).toBeNull();
    });
  });

  describe('GetUserMe', () => {
    it('should get user me success', async () => {
      mock.onGet('/auth/me').reply(200, {
        id: 1,
      } as IUser);
      const res = await AuthService.getUserMe();
      expect(res).toMatchObject({
        id: 1,
      });
    });

    it('should get user me failure', async () => {
      mock.onGet('/auth/me').reply(500, null);
      const res = await AuthService.getUserMe();
      expect(res).toBeNull();
    });
  });

  describe('RefreshAuth', () => {
    it('should refresh auth success', async () => {
      mock.onPost('/auth/refresh').reply(200, {
        accessToken: 'newAccessToken',
        refreshToken: 'newRefreshToken',
      } as IToken);
      const res = await AuthService.postAuthRefresh('currentToken');
      expect(res).toMatchObject({
        accessToken: 'newAccessToken',
        refreshToken: 'newRefreshToken',
      });
    });

    it('should refresh auth failure', async () => {
      mock.onPost('/auth/refresh').reply(401, null);
      const res = await AuthService.postAuthRefresh('currentToken');
      expect(res).toBeNull();
    });
  });
  describe('Logout', () => {
    it('should logout remove accessToken & refreshToken', async () => {
      await AuthService.logout();
      expect(accessTokenStore.remove).toHaveBeenCalled();
      expect(refreshTokenStore.remove).toHaveBeenCalled();
    });
  });
});
