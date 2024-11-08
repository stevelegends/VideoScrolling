import {renderHook, act} from '@testing-library/react-hooks';

import {useLoginTemplate} from './useLoginTemplate';

describe('useLoginTemplate', () => {
  it('should update username', () => {
    const {result} = renderHook(() => useLoginTemplate());
    act(() => {
      result.current.onSetUserName('newUsername');
    });
    expect(result.current.state.username).toBe('newUsername');
  });

  it('should update password', () => {
    const {result} = renderHook(() => useLoginTemplate());
    act(() => {
      result.current.onSetPassword('newPassword');
    });
    expect(result.current.state.password).toBe('newPassword');
  });
});
