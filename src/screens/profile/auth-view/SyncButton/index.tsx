import {Button} from 'react-native';
import {FC, memo} from 'react';

interface Props {
  onPress: () => void;
}
export const SyncButton: FC<Props> = memo(({onPress}) => {
  return <Button title="Sync Profile" onPress={onPress} />;
});
