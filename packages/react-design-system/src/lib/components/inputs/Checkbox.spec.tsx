import React from 'react';
import { render, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders a checkbox input', () => {
    render(<Checkbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders label when provided', () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
  });

  it('renders error message', () => {
    render(<Checkbox error="You must accept the terms" />);
    expect(screen.getByRole('alert')).toHaveTextContent('You must accept the terms');
  });

  it('sets aria-invalid when error is provided', () => {
    render(<Checkbox error="Required" />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('is disabled when disabled prop is passed', () => {
    render(<Checkbox disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('can be checked', () => {
    render(<Checkbox defaultChecked />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});
