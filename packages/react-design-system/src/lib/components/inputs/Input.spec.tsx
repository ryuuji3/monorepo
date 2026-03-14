import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders label when provided', () => {
    render(<Input label="Email" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('associates label with input via htmlFor', () => {
    render(<Input label="Email" id="email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders error message', () => {
    render(<Input error="This field is required" />);
    expect(screen.getByRole('alert')).toHaveTextContent('This field is required');
  });

  it('sets aria-invalid when error is provided', () => {
    render(<Input error="Required" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders hint text', () => {
    render(<Input hint="Enter your email address" />);
    expect(screen.getByText('Enter your email address')).toBeInTheDocument();
  });

  it('does not render hint when error is also provided', () => {
    render(<Input error="Error!" hint="Hint text" />);
    expect(screen.queryByText('Hint text')).not.toBeInTheDocument();
  });

  it('applies error border class when error is provided', () => {
    render(<Input error="Required" />);
    expect(screen.getByRole('textbox')).toHaveClass('border-red-500');
  });

  it('is disabled when disabled prop is passed', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('shows required asterisk in label when required', () => {
    const { container } = render(<Input label="Name" required />);
    expect(container.querySelector('span[aria-hidden]')).toHaveTextContent('*');
  });
});
