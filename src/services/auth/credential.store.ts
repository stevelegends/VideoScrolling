import * as Keychain from 'react-native-keychain';

import {baseURL} from '../api.ts';

interface IToken {
  getCredential: () => Promise<false | Keychain.UserCredentials>;
  setCredential: (value: string) => Promise<Keychain.Result | false>;
  removeCredential: () => Promise<void>;
}

type TToken = 'refreshToken' | 'accessToken';

const Token = (token: TToken): IToken => {
  const server = baseURL + '/' + token;
  return {
    getCredential: async () => {
      try {
        return await Keychain.getInternetCredentials(server);
      } catch (e) {
        console.log(token + ' - getCredential error:', e);
      }
      return false;
    },
    setCredential: async (value: string) => {
      try {
        return await Keychain.setInternetCredentials(server, token, value);
      } catch (e) {
        console.log(token + ' - setCredential error:', e);
      }
      return false;
    },
    removeCredential: async () => {
      await Keychain.resetInternetCredentials(server);
      console.log('Remove ' + token);
    },
  };
};

const CredentialStrategy = (token: IToken) => {
  return Object.freeze({
    get: token.getCredential,
    set: token.setCredential,
    remove: token.removeCredential,
  });
};

export const refreshTokenStore = CredentialStrategy(Token('refreshToken'));
export const accessTokenStore = CredentialStrategy(Token('accessToken'));
