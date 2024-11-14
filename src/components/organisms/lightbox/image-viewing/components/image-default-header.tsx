import React from 'react';
import {
  Insets,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export const createHitslop = (size: number): Insets => ({
  top: size,
  left: size,
  bottom: size,
  right: size,
});

type Props = {
  onRequestClose: () => void;
};

const HIT_SLOP = createHitslop(16);

const ImageDefaultHeader = ({onRequestClose}: Props) => {
  return (
    <SafeAreaView style={styles.root}>
      <TouchableOpacity
        style={[styles.closeButton, styles.blurredBackground]}
        onPress={onRequestClose}
        hitSlop={HIT_SLOP}
        accessibilityRole="button"
        accessibilityLabel="Close Image"
        accessibilityHint="Closes viewer for header image"
        onAccessibilityEscape={onRequestClose}>
        <Text className="color-white">Close</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'flex-end',
    pointerEvents: 'box-none',
  },
  closeButton: {
    marginRight: 10,
    marginTop: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    backgroundColor: '#00000077',
  },
  blurredBackground: {
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  } as ViewStyle,
});

export default ImageDefaultHeader;
