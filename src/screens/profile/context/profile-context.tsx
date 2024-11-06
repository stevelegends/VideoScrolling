import {
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
} from 'react';

// type
import type {TLogin} from '../../../services/auth/auth';

// services
import {AuthService} from '../../../services/auth/auth.service.ts';
import {
  accessTokenStore,
  refreshTokenStore,
} from '../../../services/auth/credential.store.ts';

// context
import {useAuth} from '../../../context';

type AuthContextType = {
  logout: () => void;
  postLogin: (data: TLogin) => void;
};

const ProfileContext = createContext<AuthContextType | undefined>(undefined);

function useProfile(): AuthContextType {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within an AuthProvider');
  }
  return context;
}

const ProfileProvider = (props: {children: ReactNode}): ReactElement => {
  const {setUser} = useAuth();
  const postLogin = useCallback(async data => {
    const user = await AuthService.postLogin(data);
    if (!user) {
      // TODO show error
      return;
    }
    await accessTokenStore.set(user.accessToken);
    await refreshTokenStore.set(user.refreshToken);
    setUser(
      Object.assign({}, user, {
        accessToken: undefined,
        refreshToken: undefined,
      }),
    );
  }, []) as (data: TLogin) => void;

  const logout = useCallback(() => {
    setUser(null);
    AuthService.logout();
  }, []);

  return <ProfileContext.Provider {...props} value={{postLogin, logout}} />;
};

export {ProfileProvider, useProfile};
