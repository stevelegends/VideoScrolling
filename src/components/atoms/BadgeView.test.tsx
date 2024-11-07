import {render} from '@testing-library/react-native';
import {BadgeView} from './BadgeView';

test('BadgeView', async () => {
  render(<BadgeView count={1} />);
});
