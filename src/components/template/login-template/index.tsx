import {FC, memo, useCallback} from 'react';

import {Button, Text, TextInput, View} from 'react-native';

import {useLoginTemplate} from './useLoginTemplate.ts';

import type {TLogin} from '../../../services/auth/auth';

interface IProps {
  onSubmit: (login: TLogin) => void;
}

export const LoginTemplate: FC<IProps> = memo(
  ({onSubmit = () => undefined}) => {
    const {state, onSetPassword, onSetUserName} = useLoginTemplate();

    const handleOnSubmit = useCallback(() => {
      onSubmit(state);
    }, [state]);

    return (
      <View className="gap-y-7 mx-7 mt-7">
        <View>
          <Text>Username</Text>
          <TextInput
            testID="username"
            value={state.username}
            onChangeText={onSetUserName}
            className="border-b border-b-gray-200"
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            testID="password"
            value={state.password}
            onChangeText={onSetPassword}
            className="border-b border-b-gray-200"
          />
        </View>
        <Button title="Login" onPress={handleOnSubmit} />
      </View>
    );
  },
);
