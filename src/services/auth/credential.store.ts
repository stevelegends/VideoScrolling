import * as Keychain from 'react-native-keychain';

import {baseURL} from '../api.ts';

interface CredentialToken {
  server: string;
  getCredential: () => Promise<false | Keychain.UserCredentials>;
  setCredential: (value: string) => Promise<Keychain.Result | false>;
  removeCredential: () => Promise<void>;
}

const AccessToken: CredentialToken = {
  server: baseURL + '/accessToken',
  getCredential: async () => {
    try {
      return await Keychain.getInternetCredentials(AccessToken.server);
    } catch (e) {
      console.log('AccessToken - getCredential error:', e);
    }
    return false;
  },
  setCredential: async (value: string) => {
    try {
      return await Keychain.setInternetCredentials(
        AccessToken.server,
        'accessToken',
        value,
      );
    } catch (e) {
      console.log('AccessToken - setCredential error:', e);
    }
    return false;
  },
  removeCredential: async () => {
    await Keychain.resetInternetCredentials(AccessToken.server);
    console.log('Remove accessToken');
  },
};

const RefreshToken: CredentialToken = {
  server: baseURL + '/refreshToken',
  getCredential: async () => {
    try {
      return await Keychain.getInternetCredentials(RefreshToken.server);
    } catch (e) {
      console.log('RefreshToken - getCredential error:', e);
    }
    return false;
  },
  setCredential: async (value: string) => {
    try {
      return await Keychain.setInternetCredentials(
        RefreshToken.server,
        'refreshToken',
        value,
      );
    } catch (e) {
      console.log('RefreshToken - setCredential error:', e);
    }
    return false;
  },
  removeCredential: async () => {
    await Keychain.resetInternetCredentials(RefreshToken.server);
    console.log('Remove refreshToken');
  },
};

const CredentialStrategy = (token: CredentialToken) => {
  return {
    get: token.getCredential,
    set: token.setCredential,
    remove: token.removeCredential,
  };
};

export const refreshTokenStore = CredentialStrategy(RefreshToken);
export const accessTokenStore = CredentialStrategy(AccessToken);
