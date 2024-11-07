import React from 'react';
import {render, act, screen, renderHook} from '@testing-library/react-native';
import {LoadingView, useLoadingView} from './LoadingView';

test('LoadingView shows and hides the ActivityIndicator', () => {
  const {
    result: {
      current: {ref, onSetIsLoading},
    },
  } = renderHook(() => useLoadingView());
  render(<LoadingView ref={ref} absoluteView={true} />);

  // Initially, the ActivityIndicator should not be visible
  expect(screen.queryByTestId('loading-indicator')).toBeNull();

  // Show the ActivityIndicator
  act(() => onSetIsLoading(true));
  expect(screen.getByTestId('loading-indicator')).toBeTruthy();

  // Hide the ActivityIndicator
  act(() => onSetIsLoading(false));
  expect(screen.queryByTestId('loading-indicator')).toBeNull();
});
