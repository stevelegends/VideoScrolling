import React, {
  createContext,
  Fragment,
  MutableRefObject,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react';

// modules
import {ViewToken} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

// theme
import {styles} from '../../theme';

// components
import {ListItem, useVideoView, VideoView} from './ListItem';

import {srcAllPlatformList, srcAndroidList, media} from './mocks';
import {useHeaderHeight} from '@react-navigation/elements';
import VideoPlayer from './VideoPlayer';
import {useFocusEffect} from '@react-navigation/native';

const data = media.map((item, index) =>
  Object.assign({}, item, {uri: item.sources[0], id: index + 'x' + Date.now()}),
);

interface PostViewToken extends ViewToken {
  item: any;
}

type ListContextType = {
  activeId: any;
  setActiveId: (value: any) => void;
  videoCurrent: MutableRefObject<{currentTime: {[key: string]: any}}>;
};

const ListContext = createContext<ListContextType | undefined>(undefined);

export function useList(): ListContextType {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error('useList must be used within an Provider');
  }
  return context;
}

const ListProvider = (props: {children: ReactNode}): ReactElement => {
  const [activeId, setActiveId] = useState<any>({});
  const videoCurrent = useRef({currentTime: {}});
  const onSetActiveId = useCallback(newValue => {
    setActiveId((prevValue: any) => Object.assign({}, {}, newValue));
  }, []) as (newValue: any) => void;
  return (
    <ListContext.Provider
      {...props}
      value={{activeId, setActiveId: onSetActiveId, videoCurrent}}
    />
  );
};

const List = () => {
  const mediaRefs = useRef<Record<string, any | null>>({});
  const inset = useSafeAreaFrame();
  const header = useHeaderHeight();
  const height = inset.height - useBottomTabBarHeight() - header;

  const list = useList();
  // console.log(height);

  // const videoView = useVideoView();

  const renderItem = useCallback(
    ({item}: any) => {
      return (
        <ListItem
          data={JSON.stringify(item)}
          height={height}
          ref={ref => (mediaRefs.current[item.id] = ref)}
        />
      );
    },
    [height],
  );

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      const element = viewableItems.reduce((prev: any, current: any) => {
        return Math.abs(current.percentVisible - 100) <
          Math.abs(prev.percentVisible - 100)
          ? current
          : prev;
      });
      if (!element) return;
      list.setActiveId({[element.item.id]: true});

      const cell = mediaRefs.current[element.item.id];

      if (cell) {
        // console.log('element::', element);
        // cell.playAt(element.item.id);
      }
    }
  });

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 75,
    minimumViewTime: 300,
  });
  useFocusEffect(
    useCallback(() => {
      // return () => list.setActiveId({});
    }, []),
  );
  return (
    <Fragment>
      {/* <VideoView ref={videoView.ref} /> */}
      <FlashList
        data={data}
        renderItem={renderItem}
        estimatedItemSize={height}
        pagingEnabled
        decelerationRate={'fast'}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
      />
    </Fragment>
  );
};

export const ListData = () => (
  <ListProvider>
    <List />
  </ListProvider>
);
