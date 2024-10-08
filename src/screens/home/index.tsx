import React, {FC} from 'react';

// modules
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// type
import type {StaticScreenProps} from '@react-navigation/native';

// theme
import {styles} from '../../theme';

// components
import {ListData} from './ListData';

type Props = StaticScreenProps<{}>;

export const HomeScreen: FC<Props> = () => {
  return (
    <SafeAreaView style={styles.flex1}>
      <View
        style={styles.flex1}
        onLayout={layout => {
          // console.log('calc:::', layout.nativeEvent.layout.height);
        }}>
        <ListData />
      </View>
    </SafeAreaView>
  );
};
