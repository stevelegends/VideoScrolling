import React from 'react';

import {Text, TextStyle, View, ViewStyle} from 'react-native';

interface IBadgeView {
  count?: number;
}

export const BadgeView = ({count}: IBadgeView) => {
  return (
    <View style={$badge}>
      <Text style={$badgeText}>{count}</Text>
    </View>
  );
};

const $badge: ViewStyle = {
  minWidth: 30,
  height: 30,
  backgroundColor: 'red',
  borderRadius: 30 / 2,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 12,
};

const $badgeText: TextStyle = {
  color: 'white',
  fontSize: 15,
};
