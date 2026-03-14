import React from 'react';
import { render, screen } from '@testing-library/react';
import { Grid } from './Grid';

describe('Grid', () => {
  it('renders children', () => {
    render(<Grid>content</Grid>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('applies grid class', () => {
    const { container } = render(<Grid>content</Grid>);
    expect(container.firstChild).toHaveClass('grid');
  });

  it('applies grid-cols class', () => {
    const { container } = render(<Grid cols={3}>content</Grid>);
    expect(container.firstChild).toHaveClass('grid-cols-3');
  });

  it('applies grid-rows class', () => {
    const { container } = render(<Grid rows={2}>content</Grid>);
    expect(container.firstChild).toHaveClass('grid-rows-2');
  });

  it('applies gap class', () => {
    const { container } = render(<Grid gap="4">content</Grid>);
    expect(container.firstChild).toHaveClass('gap-4');
  });

  it('applies colGap class', () => {
    const { container } = render(<Grid colGap="6">content</Grid>);
    expect(container.firstChild).toHaveClass('gap-x-6');
  });

  it('applies rowGap class', () => {
    const { container } = render(<Grid rowGap="2">content</Grid>);
    expect(container.firstChild).toHaveClass('gap-y-2');
  });

  it('merges custom className', () => {
    const { container } = render(<Grid className="custom">content</Grid>);
    expect(container.firstChild).toHaveClass('custom');
  });
});
