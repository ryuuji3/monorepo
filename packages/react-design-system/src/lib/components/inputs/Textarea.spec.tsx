import React from 'react';
import { render, screen } from '@testing-library/react';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders a textarea element', () => {
    render(<Textarea />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders label when provided', () => {
    render(<Textarea label="Message" />);
    expect(screen.getByText('Message')).toBeInTheDocument();
  });

  it('associates label with textarea via htmlFor', () => {
    render(<Textarea label="Message" id="msg" />);
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  it('renders error message', () => {
    render(<Textarea error="Message is required" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Message is required');
  });

  it('sets aria-invalid when error is provided', () => {
    render(<Textarea error="Required" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders hint text', () => {
    render(<Textarea hint="Max 500 characters" />);
    expect(screen.getByText('Max 500 characters')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is passed', () => {
    render(<Textarea disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});
