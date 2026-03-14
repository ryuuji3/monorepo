import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';

describe('Heading', () => {
  it('renders as h2 by default', () => {
    render(<Heading>Title</Heading>);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders as specified heading level', () => {
    render(<Heading as="h1">Main Title</Heading>);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders children text', () => {
    render(<Heading>My Heading</Heading>);
    expect(screen.getByText('My Heading')).toBeInTheDocument();
  });

  it('applies size class when provided', () => {
    render(<Heading size="5xl">Title</Heading>);
    expect(screen.getByRole('heading')).toHaveClass('text-5xl');
  });

  it('applies weight class', () => {
    render(<Heading weight="semibold">Title</Heading>);
    expect(screen.getByRole('heading')).toHaveClass('font-semibold');
  });

  it('applies default size class based on heading level', () => {
    render(<Heading as="h1">Title</Heading>);
    expect(screen.getByRole('heading')).toHaveClass('text-4xl');
  });

  it('merges custom className', () => {
    render(<Heading className="my-heading">Title</Heading>);
    expect(screen.getByRole('heading')).toHaveClass('my-heading');
  });
});
