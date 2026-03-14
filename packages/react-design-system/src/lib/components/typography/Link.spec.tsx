import React from 'react';
import { render, screen } from '@testing-library/react';
import { Link } from './Link';

describe('Link', () => {
  it('renders an anchor element', () => {
    render(<Link href="/home">Home</Link>);
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Link href="/home">Home</Link>);
    expect(screen.getByRole('link')).toHaveClass('text-blue-600');
  });

  it('applies muted variant classes', () => {
    render(<Link href="/home" variant="muted">Home</Link>);
    expect(screen.getByRole('link')).toHaveClass('text-neutral-500');
  });

  it('applies danger variant classes', () => {
    render(<Link href="/delete" variant="danger">Delete</Link>);
    expect(screen.getByRole('link')).toHaveClass('text-red-600');
  });

  it('sets target and rel for external links', () => {
    render(<Link href="https://example.com" external>External</Link>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not set target/rel for internal links', () => {
    render(<Link href="/about">About</Link>);
    const link = screen.getByRole('link');
    expect(link).not.toHaveAttribute('target');
  });

  it('merges custom className', () => {
    render(<Link href="/home" className="custom-link">Home</Link>);
    expect(screen.getByRole('link')).toHaveClass('custom-link');
  });
});
