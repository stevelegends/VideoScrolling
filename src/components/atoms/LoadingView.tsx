import React, {
  forwardRef,
  Fragment,
  memo,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {ActivityIndicator, StyleSheet, ViewStyle} from 'react-native';

interface LoadingViewRef {
  setIsLoading: (state: boolean) => void;
}

export const useLoadingView = () => {
  const ref = useRef<LoadingViewRef>();
  const onSetIsLoading = useCallback(value => {
    ref.current && ref.current.setIsLoading(value);
  }, []) as (value: boolean) => void;

  return {
    ref,
    onSetIsLoading,
  };
};

interface ILoadingView {
  absoluteView?: boolean;
  style?: ViewStyle;
}
export const LoadingView = memo(
  forwardRef(({absoluteView, style}: ILoadingView, ref) => {
    const [isLoading, setIsLoading] = useState(false);
    useImperativeHandle(
      ref,
      () => ({
        setIsLoading: (value: boolean) => {
          if (isLoading !== value) {
            setIsLoading(value);
          }
        },
      }),
      [isLoading],
    );

    const indicatorStyle = absoluteView ? StyleSheet.absoluteFill : style;
    if (!isLoading) return <Fragment />;
    return (
      <ActivityIndicator color="white" size={20} style={indicatorStyle} />
    );
  }),
);
