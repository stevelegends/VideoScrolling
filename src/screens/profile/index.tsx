import React, {FC} from 'react';

// modules
import {View, Text} from 'react-native';

// type
import type {StaticScreenProps} from '@react-navigation/native';

// theme
import {styles} from '../../theme';

type Props = StaticScreenProps<{}>;

export const ProfileScreen: FC<Props> = () => {
  return (
    <View style={styles.flex1}>
      <Text>Profile</Text>
    </View>
  );
};
