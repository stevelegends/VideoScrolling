import React, {FC, Fragment} from 'react';

// modules
import {StatusBar, View} from 'react-native';
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
    <Fragment>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <View style={styles.flex1}>
        <ListData />
      </View>
    </Fragment>
  );
};
