import MockAdapter from 'axios-mock-adapter';

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

const mock = new MockAdapter(apiInstance.axiosInstance);

describe('API instance', () => {
  it('should create instance', () => {
    expect(apiInstance.getBaseURL()).toEqual(baseURL);
  });

  it('should request success', async () => {
    mock.onGet('/test').reply(200);
    const res = await apiInstance.get('/test');
    expect(res.status).toEqual(200);
  });

  it('should request failure', async () => {
    mock.onGet('/test1').reply(500);
    const res = await apiInstance.get('/test1');
    expect(res.status).toEqual(500);
  });

  it('should request failure without refresh token store', async () => {
    jest.spyOn(refreshTokenStore, 'get').mockResolvedValue(false);
    mock.onGet('/test2').reply(401);
    const res = await apiInstance.get('/test2');
    expect(res.status).toEqual(401);
  });

  it('should request failure with refresh token api', async () => {
    jest.spyOn(refreshTokenStore, 'get').mockResolvedValue({
      password: '1',
    } as any);

    jest.spyOn(AuthService, 'postAuthRefresh').mockResolvedValue({
      refreshToken: '1',
      accessToken: '2',
    });
    mock.onGet('/test3').reply(401);
    const res = await apiInstance.get('test3');
    expect(res.status).toEqual(401);
  });

  it('should request failure without refresh token api', async () => {
    jest.spyOn(refreshTokenStore, 'get').mockResolvedValue({
      password: '1',
    } as any);

    jest.spyOn(AuthService, 'postAuthRefresh').mockResolvedValue(null);
    mock.onGet('/test3').reply(401);
    const res = await apiInstance.get('test3');
    expect(res.status).toEqual(401);
  });
});
