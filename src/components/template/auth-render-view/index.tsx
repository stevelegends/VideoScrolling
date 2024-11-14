import {FC, JSX} from 'react';

import {Text} from 'react-native';

// context
import {useAuth} from '../../../context';

interface Props {
  Auth: () => JSX.Element;
  UnAuth: () => JSX.Element;
}

export const AuthRenderView: FC<Props> = ({Auth, UnAuth}) => {
  const {user, isSyncing} = useAuth();
  const isAuthorized = user !== null;
  if (isSyncing) {
    return <Text className="text-center mt-2">Syncing ...</Text>;
  }
  if (isAuthorized) {
    return <Auth />;
  }
  return <UnAuth />;
};
