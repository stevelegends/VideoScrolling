import React, {Fragment, memo} from 'react';

import {View} from 'react-native';
import Animated, {
  Keyframe,
  LayoutAnimationConfig,
  useReducedMotion,
} from 'react-native-reanimated';

import {
  Heart2_Filled_Stroke2_Corner0_Rounded as HeartIconFilled,
  Heart2_Stroke2_Corner0_Rounded as HeartIconOutline,
} from '../icons/Heart';

const keyframe = new Keyframe({
  0: {
    transform: [{scale: 1}],
  },
  10: {
    transform: [{scale: 0.7}],
  },
  40: {
    transform: [{scale: 1.2}],
  },
  100: {
    transform: [{scale: 1}],
  },
});

const circle1Keyframe = new Keyframe({
  0: {
    opacity: 0,
    transform: [{scale: 0}],
  },
  10: {
    opacity: 0.4,
  },
  40: {
    transform: [{scale: 1.5}],
  },
  95: {
    opacity: 0.4,
  },
  100: {
    opacity: 0,
    transform: [{scale: 1.5}],
  },
});

const circle2Keyframe = new Keyframe({
  0: {
    opacity: 0,
    transform: [{scale: 0}],
  },
  10: {
    opacity: 1,
  },
  40: {
    transform: [{scale: 0}],
  },
  95: {
    opacity: 1,
  },
  100: {
    opacity: 0,
    transform: [{scale: 1.5}],
  },
});

const AnimatedHeartIcon = memo(
  ({isView, size}: {isView: boolean; size: number}) => {
    if (!isView) {
      return <Fragment />;
    }
    return (
      <Animated.View
        style={{backgroundColor: 'yellow', width: size, height: size}}
        entering={keyframe.duration(300)}>
        <HeartIconFilled style={{color: '#ec4899'}} width={size} />
      </Animated.View>
    );
  },
);

export const AnimatedLikeIcon = ({isLiked}: {isLiked: boolean}) => {
  const size = 30;
  const shouldAnimate = !useReducedMotion();

  return (
    <View style={{width: size, height: size}}>
      <AnimatedHeartIcon size={size} isView={isLiked} />
      {!isLiked && (
        <HeartIconOutline
          style={[
            {color: '#999999', backgroundColor: 'yellow'},
            {pointerEvents: 'none'},
          ]}
          width={size}
        />
      )}
      {isLiked && shouldAnimate ? (
        <>
          <Animated.View
            entering={circle1Keyframe.duration(300)}
            style={{
              position: 'absolute',
              backgroundColor: '#ec4899',
              top: 0,
              left: 0,
              width: size,
              height: size,
              zIndex: -1,
              pointerEvents: 'none',
              borderRadius: size / 2,
            }}
          />
          <Animated.View
            entering={circle2Keyframe.duration(300)}
            style={{
              position: 'absolute',
              backgroundColor: '#999999',
              top: 0,
              left: 0,
              width: size,
              height: size,
              zIndex: -1,
              pointerEvents: 'none',
              borderRadius: size / 2,
            }}
          />
        </>
      ) : null}
    </View>
  );
};
