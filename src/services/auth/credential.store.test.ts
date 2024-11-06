import * as Keychain from 'react-native-keychain';

import {accessTokenStore, refreshTokenStore} from './credential.store.ts';
import {baseURL} from '../api.ts';

jest.mock('react-native-keychain', () => {
  const store: {[server: string]: any} = {};
  return {
    setInternetCredentials: jest.fn(async (server, username, password) => {
      return new Promise((resolve, _reject) => {
        if (!password) {
          _reject('Failed');
        }
        store[server] = {server, username, password};
        resolve({
          service: server,
        } as Keychain.Result);
      });
    }),
    getInternetCredentials: jest.fn(async (server: string) => {
      return new Promise((resolve, _reject) => {
        if (!store[server].password) {
          _reject('Failed');
        }
        resolve({
          username: store[server].username,
          password: store[server].password,
        } as Keychain.UserCredentials);
      });
    }),
    resetInternetCredentials: jest.fn(async (server: string) => {
      return new Promise((resolve, _reject) => {
        delete store[server];
        resolve({});
      });
    }),
  };
});

describe('CredentialAccessToken', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get access token credentials', async () => {
    await accessTokenStore.set('1');
    const credentials = await accessTokenStore.get();
    expect(credentials).toEqual({
      username: 'accessToken',
      password: '1',
    });
  });

  it('should set access token credentials', async () => {
    const result = await accessTokenStore.set('2');
    expect(result).toMatchObject({
      service: baseURL + '/accessToken',
    });
  });

  it('should remove access token credentials', async () => {
    await accessTokenStore.remove();
    expect(Keychain.resetInternetCredentials).toHaveBeenCalledWith(
      baseURL + '/accessToken',
    );
  });
});

describe('CredentialAccessToken Failure', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should set access token credentials failure', async () => {
    const result = await accessTokenStore.set('');
    expect(result).toBeFalsy();
  });

  it('should get access token credentials failure', async () => {
    const result = await accessTokenStore.get();
    expect(result).toBeFalsy();
  });
});

describe('CredentialRefreshToken', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get refresh token credentials', async () => {
    await refreshTokenStore.set('testRefreshToken');
    const credentials = await refreshTokenStore.get();
    expect(credentials).toEqual({
      username: 'refreshToken',
      password: 'testRefreshToken',
    });
  });

  it('should set refresh token credentials', async () => {
    const result = await refreshTokenStore.set('testRefreshToken');
    expect(result).toMatchObject({
      service: baseURL + '/refreshToken',
    });
  });

  it('should remove refresh token credentials', async () => {
    await refreshTokenStore.remove();
    expect(Keychain.resetInternetCredentials).toHaveBeenCalledWith(
      baseURL + '/refreshToken',
    );
  });
});

describe('CredentialRefreshToken Failure', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should set access token credentials failure', async () => {
    const result = await refreshTokenStore.set('');
    expect(result).toBeFalsy();
  });

  it('should get access token credentials failure', async () => {
    const result = await refreshTokenStore.get();
    expect(result).toBeFalsy();
  });
});
