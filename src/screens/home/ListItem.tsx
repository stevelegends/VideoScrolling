import React, {forwardRef, useImperativeHandle} from 'react';

// modules
import {TextStyle, View, Text, ViewStyle} from 'react-native';

// components
import {useVideoView, VideoView} from './VideoView';

// import VideoCache from 'react-native-video-cache';

const getData = (data: string) => {
  try {
    return JSON.parse(data);
  } catch (error) {}
  return data;
};

export const ListItem = forwardRef(
  ({data, height}: {data: string; height: number}, ref) => {
    const {description, uri, id} = getData(data);

    const videoView = useVideoView();

    useImperativeHandle(
      ref,
      () => ({
        playAt: (playAtId: string) => {
          // DEPRECATED
        },
      }),
      [],
    );

    return (
      <View style={[$container, {height}]}>
        <View style={[$videoSkeleton]} />
        <VideoView ref={videoView.ref} id={id} uri={uri} />
        <Text style={$title}>{description}</Text>
      </View>
    );
  },
);

const $container: ViewStyle = {
  width: '100%',
  borderBottomWidth: 0.5,
  borderBottomColor: 'rgba(0,0,0,0.3)',
};

const $title: TextStyle = {
  position: 'absolute',
  color: 'white',
  bottom: 10,
  left: 10,
};

const $videoSkeleton: ViewStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
};
