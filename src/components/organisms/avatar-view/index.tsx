import {memo, useCallback} from 'react';

import {Image, TouchableWithoutFeedback, View} from 'react-native';
import Animated, {
  MeasuredDimensions,
  measure,
  runOnJS,
  runOnUI,
  useAnimatedRef,
} from 'react-native-reanimated';

import {LikeButton} from '../../molecules';

import {useAuth} from '../../../context';
import {useLightboxControls} from '../lightbox/useLightbox.tsx';

export const AvatarView = memo(() => {
  const {user} = useAuth();
  const avatar = user?.image;

  const {openLightbox} = useLightboxControls();

  const aviRef = useAnimatedRef();

  const _openLightbox = useCallback(
    (uri: string, thumbRect: MeasuredDimensions | null) => {
      openLightbox({
        images: [
          {
            uri,
            thumbUri: uri,
            thumbRect,
            dimensions: {
              // It's fine if it's actually smaller but we know it's 1:1.
              height: 1000,
              width: 1000,
            },
            thumbDimensions: null,
            type: 'circle-avi',
          },
        ],
        index: 0,
      });
    },
    [openLightbox],
  );

  const onPressAvi = useCallback(() => {
    if (avatar) {
      runOnUI(() => {
        'worklet';
        const rect = measure(aviRef);
        runOnJS(_openLightbox)(avatar, rect);
      })();
    }
  }, [avatar, _openLightbox, aviRef]);

  return (
    <View>
      <TouchableWithoutFeedback
        testID="avataButton"
        onPress={onPressAvi}
        accessibilityRole="image"
        accessibilityLabel="Avatar"
        accessibilityHint="">
        <Animated.View ref={aviRef} collapsable={false}>
          <Image
            style={{
              borderColor: 'gray',
              backgroundColor: 'white',
              width: 128,
              height: 128,
              borderRadius: 128,
            }}
            resizeMode="cover"
            source={{
              uri: user?.image,
            }}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
      <LikeButton />
    </View>
  );
});
