import React, {
  forwardRef,
  Fragment,
  memo,
  ReactElement,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

// modules
import {TextStyle, View, Text, ViewStyle, StyleSheet} from 'react-native';
import Video, {
  OnBufferData,
  OnProgressData,
  OnVideoErrorData,
  ResizeMode,
  VideoRef,
} from 'react-native-video';
// import VideoCache from 'react-native-video-cache';

// hooks
import {useList} from './ListData';

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

interface VideoViewRef {
  setActiveId: (value: string) => void;
  onPlay: () => void;
}

export const useVideoView = () => {
  const ref = useRef<VideoViewRef>();
  const setActiveId = useCallback(value => {
    ref.current && ref.current.setActiveId(value);
  }, []) as (value: string) => void;

  const onPlay = useCallback(() => {
    ref.current && ref.current.onPlay();
  }, []) as () => void;

  return {
    ref,
    setActiveId,
    onPlay,
  };
};

interface IVideoView {
  uri: string;
  id: string;
}

export const VideoView = memo(
  forwardRef(({uri, id}: IVideoView, ref) => {
    // const [activeId, setActiveId] = useState(null);
    const list = useList();

    const videoRef = useRef<VideoRef>(null);

    const onLoadCurrentTime = useCallback(() => {
      const currentTime = list.videoCurrent.current.currentTime[id] || 0;
      // console.log('videoCurrent.current.currentTime', currentTime);

      videoRef.current?.seek(currentTime);
    }, []);

    const onVideoLoadStart = useCallback(() => {}, []);

    const onReadyForDisplay = useCallback(() => {}, []);

    const onVideoBuffer = useCallback(params => {}, []) as (
      params: OnBufferData,
    ) => void;

    const onError = useCallback(
      error => {
        console.log('can not load video at::', id);
      },
      [id],
    ) as (error: OnVideoErrorData) => void;

    const onProgress = useCallback(
      (data: OnProgressData) => {
        const currentTime = data.currentTime;
        list.videoCurrent.current.currentTime[id] = currentTime;
      },
      [id],
    );

    useImperativeHandle(
      ref,
      () => ({
        onPlay: () => {
          videoRef.current && videoRef.current.resume();
        },
      }),
      [],
    );

    const onActiveController = useCallback(active => {
      active ? videoRef.current?.resume() : videoRef.current?.pause();
      onLoadCurrentTime();
    }, []) as (active: boolean) => void;

    return (
      <Controller id={id} onActive={onActiveController}>
        <Video
          ref={videoRef}
          source={{uri, shouldCache: true}}
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
          resizeMode={ResizeMode.CONTAIN}
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
          repeat={false}
          // selectedTextTrack={this.state.selectedTextTrack}
          // selectedAudioTrack={this.state.selectedAudioTrack}
          playInBackground={false}
        />
        {/* <LoadingView absoluteView ref={loadingView.ref} /> */}
      </Controller>
    );
  }),
);

interface IController {
  children: ReactElement;
  id: string;
  onActive: (active: boolean) => void;
}

const Controller = memo(
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

const $container: ViewStyle = {
  width: '100%',
  borderBottomWidth: 1,
  borderBottomColor: 'white',
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
