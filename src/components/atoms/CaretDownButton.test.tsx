import {render, screen, userEvent} from '@testing-library/react-native';
import {CaretDownButton} from './CaretDownButton';

jest.mock('react-native-vector-icons/AntDesign', () => 'Icon');

test('CaretDownButton', async () => {
  const onPress = jest.fn();
  const user = userEvent.setup();

  render(<CaretDownButton accessibilityRole="button" onPress={onPress} />);
  await user.press(screen.getByRole('button'));
  expect(onPress).toHaveBeenCalled();
});
