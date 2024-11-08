import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';

import {LoginTemplate} from './';
import {useLoginTemplate} from './useLoginTemplate.ts';

jest.mock('./useLoginTemplate.ts');

describe('LoginTemplate', () => {
  beforeEach(() => {
    (useLoginTemplate as jest.Mock).mockReturnValue({
      state: {username: 'emilys', password: 'emilyspass'},
      onSetUserName: jest.fn(),
      onSetPassword: jest.fn(),
    });
  });

  it('renders correctly', () => {
    render(<LoginTemplate onSubmit={jest.fn()} />);
    expect(screen.getByText('Username')).toBeTruthy();
    expect(screen.getByDisplayValue('emilys')).toBeTruthy();
    expect(screen.getByText('Password')).toBeTruthy();
    expect(screen.getByDisplayValue('emilyspass')).toBeTruthy();
  });

  it('calls onSetUserName when username input changes', () => {
    render(<LoginTemplate onSubmit={jest.fn()} />);
    const usernameInput = screen.getByDisplayValue('emilys');
    fireEvent.changeText(usernameInput, 'newUsername');
    expect(useLoginTemplate().onSetUserName).toHaveBeenCalledWith(
      'newUsername',
    );
  });

  it('calls onSetPassword when password input changes', () => {
    render(<LoginTemplate onSubmit={jest.fn()} />);
    const passwordInput = screen.getByDisplayValue('emilyspass');
    fireEvent.changeText(passwordInput, 'newPassword');
    expect(useLoginTemplate().onSetPassword).toHaveBeenCalledWith(
      'newPassword',
    );
  });

  it('calls onSubmit with state when login button is pressed', () => {
    const onSubmit = jest.fn();
    render(<LoginTemplate onSubmit={onSubmit} />);
    fireEvent.press(screen.getByText('Login'));
    expect(onSubmit).toHaveBeenCalledWith({
      username: 'emilys',
      password: 'emilyspass',
    });
  });
});
