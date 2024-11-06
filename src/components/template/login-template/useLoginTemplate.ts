import {useCallback, useReducer} from 'react';

import type {TLogin} from '../../../services/auth/auth';

function loginReducer(
  state: TLogin,
  action: {type: keyof TLogin; payload: string},
) {
  if (action.type === 'username') {
    return Object.assign({}, state, {username: action.payload});
  }
  if (action.type === 'password') {
    return Object.assign({}, state, {password: action.payload});
  }
  throw Error('Unknown action.');
}

export const useLoginTemplate = () => {
  const [state, dispatch] = useReducer(loginReducer, {
    username: 'emilys',
    password: 'emilyspass',
  });

  const onSetUserName = useCallback(value => {
    dispatch({
      type: 'username',
      payload: value,
    });
  }, []) as (value: string) => void;

  const onSetPassword = useCallback(value => {
    dispatch({
      type: 'password',
      payload: value,
    });
  }, []) as (value: string) => void;

  return {
    state,
    onSetPassword,
    onSetUserName,
  };
};
