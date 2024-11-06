import React, {FC} from 'react';

// modules
import {View} from 'react-native';

// type
import type {StaticScreenProps} from '@react-navigation/native';

// theme
import {styles} from '../../theme';

// components
import {UnAuthView} from './un-auth-view';
import {ProfileProvider} from './context/profile-context.tsx';
import {AuthRenderView} from '../../components/template';
import {AuthView} from './auth-view';

type Props = StaticScreenProps<{}>;

const Profile: FC<Props> = () => {
  return (
    <View style={styles.flex1}>
      <AuthRenderView Auth={() => <AuthView />} UnAuth={() => <UnAuthView />} />
    </View>
  );
};

export const ProfileScreen = (props: Props) => (
  <ProfileProvider>
    <Profile {...props} />
  </ProfileProvider>
);
