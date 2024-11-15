import {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

// type
import type {IUserInfo} from '../services/auth/auth';
//services
import {AuthService} from '../services/auth/auth.service.ts';
import {accessTokenStore} from '../services/auth/credential.store.ts';

type AuthContextType = {
  user: IUserInfo | null;
  setUser: Dispatch<SetStateAction<IUserInfo | null>>;
  isSyncing: boolean;
  onSyncUser: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

const AuthProvider = (props: {children: ReactNode}): ReactElement => {
  const [user, setUser] = useState<IUserInfo | null>(null);
  const [isSyncing, setIsSyncing] = useState(true);

  const onSyncUser = useCallback(async () => {
    const isAuthorized = await accessTokenStore.get();
    if (!isAuthorized) {
      return;
    }

    const user = await AuthService.getUserMe();
    if (!user) {
      return; // TODO show error
    }
    setUser(user);
  }, []);

  const onSyncingData = useCallback(async () => {
    await onSyncUser();
    setIsSyncing(false);
  }, []);

  useEffect(() => {
    onSyncingData();
  }, []);

  return (
    <AuthContext.Provider
      {...props}
      value={{user, setUser, isSyncing, onSyncUser}}
    />
  );
};

export {AuthProvider, useAuth};
