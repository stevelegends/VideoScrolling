import React, {
  createContext,
  Fragment,
  MutableRefObject,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

// modules
import {Dimensions, StatusBar, ViewToken} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';
import {useHeaderHeight} from '@react-navigation/elements';

// theme
import {styles} from '../../theme';

// components
import {ListItem, useVideoView, VideoView} from './ListItem';
import VideoPlayer from './VideoPlayer';

import {srcAllPlatformList, srcAndroidList, media, reals} from './mocks';
import {videoServiceInstance} from '../../services';

const data = reals.map(item =>
  Object.assign({}, item, {uri: item.url, id: item.video}),
);

interface PostViewToken extends ViewToken {
  item: any;
}

type ListContextType = {
  activeId: {[id: string]: boolean};
  setActiveId: (value: any) => void;
  activeVideo: MutableRefObject<{currentTime: {[key: string]: any}}>;
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
  const [activeId, setActiveId] = useState<{[id: string]: boolean}>({});
  const activeVideo = useRef({currentTime: {}});

  useEffect(() => {
    // videoServiceInstance.getPostTrending();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const updateActiveId = (isActive: boolean) => {
        setActiveId(prev => {
          const keys = Object.keys(prev);
          if (keys.length > 0) {
            return {[keys[0]]: isActive};
          }
          return prev;
        });
      };

      updateActiveId(true); // Set active on focus

      return () => {
        updateActiveId(false); // Reset on blur
      };
    }, []),
  );

  return (
    <ListContext.Provider
      {...props}
      value={{activeId, setActiveId, activeVideo}}
    />
  );
};

const List = () => {
  const mediaRefs = useRef<Record<string, any | null>>({});
  const inset = useSafeAreaFrame();
  const header = useHeaderHeight();
  const safeAreaInsets = useSafeAreaInsets();
  // const height = inset.height - useBottomTabBarHeight() - header;
  const height = Dimensions.get('window').height - safeAreaInsets.top;

  const list = useList();

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

      /** DEPRECATED
      const cell = mediaRefs.current[element.item.id];
      if (cell) {
        cell.playAt(element.item.id);
      } */
    }
  });

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 75,
    minimumViewTime: 300,
  });

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
