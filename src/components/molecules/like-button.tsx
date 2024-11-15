import {FC, memo, useCallback, useState} from 'react';

import {Pressable, PressableProps} from 'react-native';

// components
import {AnimatedLikeIcon} from '../atoms';

interface Props extends PressableProps {}

export const POST_CTRL_HIT_SLOP = {top: 5, bottom: 10, left: 10, right: 10};

export const LikeButton: FC<Props> = memo(props => {
  const [isLiked, setIsLiked] = useState(false);
  const onPress = useCallback(() => {
    setIsLiked(prevState => !prevState);
  }, []);

  return (
    <Pressable hitSlop={POST_CTRL_HIT_SLOP} {...props} onPress={onPress}>
      <AnimatedLikeIcon isLiked={isLiked} />
    </Pressable>
  );
});
