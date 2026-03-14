import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
  it('renders an svg element', () => {
    const { container } = render(<Icon name="check" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders with aria-hidden by default (decorative)', () => {
    const { container } = render(<Icon name="check" />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
  });

  it('renders with aria-label when label is provided', () => {
    render(<Icon name="check" label="Verified" />);
    expect(screen.getByRole('img', { name: 'Verified' })).toBeInTheDocument();
  });

  it('applies the correct pixel size for sm', () => {
    const { container } = render(<Icon name="check" size="sm" />);
    expect(container.querySelector('svg')).toHaveAttribute('width', '16');
  });

  it('applies the correct pixel size for lg', () => {
    const { container } = render(<Icon name="check" size="lg" />);
    expect(container.querySelector('svg')).toHaveAttribute('width', '24');
  });

  it('renders the close icon', () => {
    const { container } = render(<Icon name="close" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders the search icon', () => {
    const { container } = render(<Icon name="search" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('merges custom className', () => {
    const { container } = render(<Icon name="check" className="text-green-500" />);
    expect(container.querySelector('svg')).toHaveClass('text-green-500');
  });
});
