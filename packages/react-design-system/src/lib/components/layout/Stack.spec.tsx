import React from 'react';
import { render, screen } from '@testing-library/react';
import { Stack } from './Stack';

describe('Stack', () => {
  it('renders children', () => {
    render(<Stack>content</Stack>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('applies flex and flex-col by default', () => {
    const { container } = render(<Stack>content</Stack>);
    expect(container.firstChild).toHaveClass('flex', 'flex-col');
  });

  it('applies flex-row when horizontal', () => {
    const { container } = render(<Stack horizontal>content</Stack>);
    expect(container.firstChild).toHaveClass('flex-row');
  });

  it('applies spacing gap class', () => {
    const { container } = render(<Stack spacing="6">content</Stack>);
    expect(container.firstChild).toHaveClass('gap-6');
  });

  it('applies default spacing gap-4', () => {
    const { container } = render(<Stack>content</Stack>);
    expect(container.firstChild).toHaveClass('gap-4');
  });

  it('merges custom className', () => {
    const { container } = render(<Stack className="my-stack">content</Stack>);
    expect(container.firstChild).toHaveClass('my-stack');
  });
});
