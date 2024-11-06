// modules
import React, {
  forwardRef,
  Fragment,
  memo,
  ReactElement,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

// modules
import Video, {
  OnBufferData,
  OnProgressData,
  OnVideoErrorData,
  ResizeMode,
  VideoRef,
} from 'react-native-video';
import convertToProxyURL from 'react-native-video-cache';

// hooks
import {useList} from './ListData';
import {StyleSheet, ViewStyle} from 'react-native';
import {LoadingView, useLoadingView} from '../../components';

interface VideoViewRef {
  setActiveId: (value: string) => void;
  onPlay: () => void;
}

export const useVideoView = () => {
  const ref = useRef<VideoViewRef>();

  const onPlay = useCallback(() => {
    ref.current && ref.current.onPlay();
  }, []) as () => void;

  return {
    ref,
    onPlay,
  };
};

interface IVideoView {
  uri: string;
  id: string;
}

interface IController {
  children: ReactElement;
  id: string;
  onActive: (active: boolean) => void;
}

const VideoController = memo(
  ({children, id, onActive = () => undefined}: IController) => {
    const {activeId} = useList();
    const isActive = activeId[id] ?? false;

    useEffect(() => {
      console.log('activeId:', isActive, '- id:', id);
      onActive(isActive);
    }, [isActive]);
    return <Fragment>{children}</Fragment>;
  },
);

export const VideoView = memo(
  forwardRef(({uri, id}: IVideoView, ref) => {
    const list = useList();

    const videoRef = useRef<VideoRef>(null);

    const loadingView = useLoadingView();

    const onLoadCurrentTime = useCallback(() => {
      const currentTime = list.activeVideo.current.currentTime[id] || 0;
      videoRef.current?.seek(currentTime);
    }, []);

    const onVideoLoadStart = useCallback(() => {
      // TODO implement
    }, []);

    const onReadyForDisplay = useCallback(() => {
      // TODO implement
    }, []);

    const onVideoBuffer = useCallback(params => {
      loadingView.onSetIsLoading(params.isBuffering);
    }, []) as (params: OnBufferData) => void;

    const onError = useCallback(
      error => {
        // TODO implement
        console.log('can not load video at::', id);
      },
      [id],
    ) as (error: OnVideoErrorData) => void;

    const onProgress = useCallback(
      (data: OnProgressData) => {
        const currentTime = data.currentTime;
        list.activeVideo.current.currentTime[id] = currentTime;
      },
      [id],
    );

    const onActiveController = useCallback(active => {
      active ? videoRef.current?.resume() : videoRef.current?.pause();
      onLoadCurrentTime();
    }, []) as (active: boolean) => void;

    useImperativeHandle(
      ref,
      () => ({
        onPlay: () => {
          videoRef.current && videoRef.current.resume();
        },
      }),
      [],
    );

    const cachedUri = useMemo(() => {
      const convertUri = convertToProxyURL(uri);
      return convertUri;
    }, [uri]);

    console.log('CachedUri', cachedUri);

    return (
      <VideoController id={id} onActive={onActiveController}>
        <Fragment>
          <Video
            ref={videoRef}
            source={{uri: cachedUri}}
            // adTagUrl={this.srcList[this.state.srcListId]?.adTagUrl}
            // drm={this.srcList[this.state.srcListId]?.drm}
            style={StyleSheet.absoluteFill}
            // rate={this.state.rate}
            // paused={this.state.paused}
            paused={true}
            // volume={this.state.volume}
            // muted={this.state.muted}
            // fullscreen={this.state.fullscreen}
            // controls={this.state.showRNVControls}
            // resizeMode={this.state.resizeMode}
            resizeMode={ResizeMode.COVER}
            // onLoad={this.onLoad}
            // onAudioTracks={this.onAudioTracks}
            // onTextTracks={this.onTextTracks}
            onProgress={onProgress}
            // onEnd={this.onEnd}
            progressUpdateInterval={1000}
            onError={onError}
            // onAudioBecomingNoisy={this.onAudioBecomingNoisy}
            // onAudioFocusChanged={this.onAudioFocusChanged}
            onLoadStart={onVideoLoadStart}
            // onAspectRatio={this.onAspectRatio}
            onReadyForDisplay={onReadyForDisplay}
            onBuffer={onVideoBuffer}
            // repeat={this.state.loop}
            repeat={true}
            // selectedTextTrack={this.state.selectedTextTrack}
            // selectedAudioTrack={this.state.selectedAudioTrack}
            playInBackground={false}
          />
          <LoadingView style={$loadingStyle} ref={loadingView.ref} />
        </Fragment>
      </VideoController>
    );
  }),
);

const $loadingStyle: ViewStyle = {
  position: 'absolute',
  bottom: 60,
  left: 0,
  right: 0,
};
