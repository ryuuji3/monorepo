import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
  it('renders children', () => {
    render(<Label>Email</Label>);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders a required asterisk when required is true', () => {
    const { container } = render(<Label required>Email</Label>);
    expect(container.querySelector('span')).toHaveTextContent('*');
  });

  it('does not render asterisk when required is false', () => {
    const { container } = render(<Label>Email</Label>);
    expect(container.querySelector('span')).not.toBeInTheDocument();
  });

  it('merges custom className', () => {
    render(<Label className="custom-label">Email</Label>);
    expect(screen.getByText('Email').closest('label')).toHaveClass('custom-label');
  });

  it('passes htmlFor to label', () => {
    render(<Label htmlFor="email-input">Email</Label>);
    expect(screen.getByText('Email').closest('label')).toHaveAttribute('for', 'email-input');
  });
});
