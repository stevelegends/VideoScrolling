import {FC, memo, useCallback} from 'react';
import {
  Button,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

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
      <View style={$container}>
        <View>
          <Text>Username</Text>
          <TextInput
            value={state.username}
            onChangeText={onSetUserName}
            style={$input}
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            value={state.password}
            onChangeText={onSetPassword}
            style={$input}
          />
        </View>
        <Button title="Login" onPress={handleOnSubmit} />
      </View>
    );
  },
);

const $container: ViewStyle = {
  rowGap: 30,
  padding: 30,
};

const $input: TextStyle = {
  borderBottomWidth: 0.5,
  borderColor: 'grey',
};
