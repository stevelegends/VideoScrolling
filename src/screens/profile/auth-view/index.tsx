import {memo, useCallback} from 'react';
import {Button, Text, View} from 'react-native';

// context
import {useAuth} from '../../../context';
import {useProfile} from '../context/profile-context.tsx';

// components
import {SyncButton} from './SyncButton';
import {AvatarView} from '../../../components';

export const AuthView = memo(() => {
  const {user, onSyncUser} = useAuth();
  const {logout} = useProfile();

  const handleLogoutOnPress = useCallback(() => {
    logout();
  }, []);

  const handleSyncOnPress = useCallback(() => {
    onSyncUser();
  }, []);

  return (
    <View className="flex-1 items-center">
      <Text>{JSON.stringify(user)}</Text>
      <AvatarView />
      <Button title="Logout" onPress={handleLogoutOnPress} />
      <SyncButton onPress={handleSyncOnPress} />
    </View>
  );
});
