import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {Text} from 'react-native';

import {AuthRenderView} from './';
import {useAuth} from '../../../context';

// Mock the useAuth hook
jest.mock('../../../context', () => ({
  useAuth: jest.fn(),
}));

const AuthComponent = () => <Text>Authorized</Text>;
const UnAuthComponent = () => <Text>Unauthorized</Text>;

describe('AuthRenderView', () => {
  it('renders syncing text when isSyncing is true', () => {
    (useAuth as jest.Mock).mockReturnValue({user: null, isSyncing: true});
    render(<AuthRenderView Auth={AuthComponent} UnAuth={UnAuthComponent} />);
    expect(screen.getByText('Syncing ...')).toBeTruthy();
  });

  it('renders Auth component when user is authorized', () => {
    (useAuth as jest.Mock).mockReturnValue({
      user: {name: 'John Doe'},
      isSyncing: false,
    });
    render(<AuthRenderView Auth={AuthComponent} UnAuth={UnAuthComponent} />);
    expect(screen.getByText('Authorized')).toBeTruthy();
  });

  it('renders UnAuth component when user is not authorized', () => {
    (useAuth as jest.Mock).mockReturnValue({user: null, isSyncing: false});
    render(<AuthRenderView Auth={AuthComponent} UnAuth={UnAuthComponent} />);
    expect(screen.getByText('Unauthorized')).toBeTruthy();
  });
});
