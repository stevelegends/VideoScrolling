import {memo, useCallback} from 'react';

// components
import {LoginTemplate} from '../../../components/template';

// type
import type {TLogin} from '../../../services/auth/auth';

// context
import {useProfile} from '../context/profile-context.tsx';

export const UnAuthView = memo(() => {
  const {postLogin} = useProfile();

  const handleOnSubmit = useCallback(value => {
    postLogin(value);
  }, []) as (value: TLogin) => void;

  return <LoginTemplate onSubmit={handleOnSubmit} />;
});
