import {memo, useCallback} from 'react';

// modules
import Animated, {
  measure,
  MeasuredDimensions,
  runOnJS,
  runOnUI,
  useAnimatedRef,
} from 'react-native-reanimated';
import {Image, TouchableWithoutFeedback} from 'react-native';

// components
import {useLightboxControls} from '../lightbox/useLightbox.tsx';

// hooks
import {useAuth} from '../../../context';

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
    <TouchableWithoutFeedback
      testID="avataButton"
      onPress={onPressAvi}
      accessibilityRole="image"
      accessibilityLabel="Avatar"
      accessibilityHint="">
      <Animated.View ref={aviRef} collapsable={false}>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: user?.image,
          }}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
});
