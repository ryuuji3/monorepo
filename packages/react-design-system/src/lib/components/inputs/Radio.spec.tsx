import React from 'react';
import { render, screen } from '@testing-library/react';
import { Radio } from './Radio';

describe('Radio', () => {
  it('renders a radio input', () => {
    render(<Radio />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('renders label when provided', () => {
    render(<Radio label="Option A" />);
    expect(screen.getByLabelText('Option A')).toBeInTheDocument();
  });

  it('renders error message', () => {
    render(<Radio error="Please select an option" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Please select an option');
  });

  it('sets aria-invalid when error is provided', () => {
    render(<Radio error="Required" />);
    expect(screen.getByRole('radio')).toHaveAttribute('aria-invalid', 'true');
  });

  it('is disabled when disabled prop is passed', () => {
    render(<Radio disabled />);
    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('can be checked', () => {
    render(<Radio defaultChecked />);
    expect(screen.getByRole('radio')).toBeChecked();
  });
});
