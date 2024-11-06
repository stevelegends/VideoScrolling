import React, {FC} from 'react';

// modules
import {View, Text, StatusBar} from 'react-native';

// type
import type {StaticScreenProps} from '@react-navigation/native';

// theme
import {styles} from '../../theme';

// components
import HeadphonesCarousel from './HeadPhoneCarousel';
import { NestPagerView } from './NestPagerView';

type Props = StaticScreenProps<{}>;

export const FeedScreen: FC<Props> = () => {
  return (
    <View style={styles.flex1}>
      <HeadphonesCarousel />
      {/* <NestPagerView /> */}
    </View>
  );
};
