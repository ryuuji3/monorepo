import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
  it('renders a paragraph by default', () => {
    const { container } = render(<Text>Hello</Text>);
    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<Text>Hello world</Text>);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('renders as a span when specified', () => {
    const { container } = render(<Text as="span">text</Text>);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('applies size class', () => {
    const { container } = render(<Text size="sm">text</Text>);
    expect(container.firstChild).toHaveClass('text-sm');
  });

  it('applies muted variant class', () => {
    const { container } = render(<Text variant="muted">text</Text>);
    expect(container.firstChild).toHaveClass('text-neutral-500');
  });

  it('applies error variant class', () => {
    const { container } = render(<Text variant="error">Error!</Text>);
    expect(container.firstChild).toHaveClass('text-red-600');
  });

  it('merges custom className', () => {
    const { container } = render(<Text className="my-text">text</Text>);
    expect(container.firstChild).toHaveClass('my-text');
  });
});
