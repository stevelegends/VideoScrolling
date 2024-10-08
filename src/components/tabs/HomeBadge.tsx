import {memo, useState} from 'react';
import {Text} from 'react-native';

export const HomeBadge = memo(() => {
  const [count, setCount] = useState(10);
  return <Text>{count}</Text>;
});
