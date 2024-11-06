import React from 'react';
import {Pressable} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

interface IButton {
  onPress: () => undefined;
  size?: number;
}
export const CaretDownButton = ({onPress, size = 30}: IButton) => {
  return (
    <Pressable onPress={onPress}>
      <Icon name="caretdown" size={size} color="#FFF" />
    </Pressable>
  );
};
