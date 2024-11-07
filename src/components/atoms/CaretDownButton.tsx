import React from 'react';
import {Pressable, PressableProps} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

interface IButton extends PressableProps {
  onPress: () => undefined;
  size?: number;
}
export const CaretDownButton = ({onPress, size = 30, ...props}: IButton) => {
  return (
    <Pressable onPress={onPress} {...props}>
      <Icon name="caretdown" size={size} color="#FFF" />
    </Pressable>
  );
};
