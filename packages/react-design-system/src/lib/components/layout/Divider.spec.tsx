import React from 'react';
import { render, screen } from '@testing-library/react';
import { Divider } from './Divider';

describe('Divider', () => {
  it('renders a horizontal hr by default', () => {
    const { container } = render(<Divider />);
    expect(container.querySelector('hr')).toBeInTheDocument();
  });

  it('renders a vertical separator', () => {
    render(<Divider orientation="vertical" />);
    expect(screen.getByRole('separator')).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('renders a label when provided', () => {
    render(<Divider label="OR" />);
    expect(screen.getByText('OR')).toBeInTheDocument();
  });

  it('applies dashed border style', () => {
    const { container } = render(<Divider variant="dashed" />);
    expect(container.querySelector('hr')).toHaveClass('border-dashed');
  });

  it('applies dotted border style', () => {
    const { container } = render(<Divider variant="dotted" />);
    expect(container.querySelector('hr')).toHaveClass('border-dotted');
  });

  it('merges custom className', () => {
    const { container } = render(<Divider className="my-divider" />);
    expect(container.querySelector('hr')).toHaveClass('my-divider');
  });
});
