import React from 'react';
import { render, screen } from '@testing-library/react';
import { Flex } from './Flex';

describe('Flex', () => {
  it('renders children', () => {
    render(<Flex>content</Flex>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('applies flex class by default', () => {
    const { container } = render(<Flex>content</Flex>);
    expect(container.firstChild).toHaveClass('flex');
  });

  it('applies inline-flex when inline is true', () => {
    const { container } = render(<Flex inline>content</Flex>);
    expect(container.firstChild).toHaveClass('inline-flex');
  });

  it('applies flex-col direction', () => {
    const { container } = render(<Flex direction="col">content</Flex>);
    expect(container.firstChild).toHaveClass('flex-col');
  });

  it('applies align class', () => {
    const { container } = render(<Flex align="center">content</Flex>);
    expect(container.firstChild).toHaveClass('items-center');
  });

  it('applies justify class', () => {
    const { container } = render(<Flex justify="between">content</Flex>);
    expect(container.firstChild).toHaveClass('justify-between');
  });

  it('applies gap class', () => {
    const { container } = render(<Flex gap="4">content</Flex>);
    expect(container.firstChild).toHaveClass('gap-4');
  });

  it('applies wrap class', () => {
    const { container } = render(<Flex wrap="wrap">content</Flex>);
    expect(container.firstChild).toHaveClass('flex-wrap');
  });
});
