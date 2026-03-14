import React from 'react';
import { render, screen } from '@testing-library/react';
import { Container } from './Container';

describe('Container', () => {
  it('renders children', () => {
    render(<Container>Hello</Container>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('applies mx-auto when centered (default)', () => {
    const { container } = render(<Container>content</Container>);
    expect(container.firstChild).toHaveClass('mx-auto');
  });

  it('does not apply mx-auto when centered is false', () => {
    const { container } = render(<Container centered={false}>content</Container>);
    expect(container.firstChild).not.toHaveClass('mx-auto');
  });

  it('applies maxWidth class', () => {
    const { container } = render(<Container maxWidth="xl">content</Container>);
    expect(container.firstChild).toHaveClass('max-w-screen-xl');
  });

  it('applies full width class', () => {
    const { container } = render(<Container maxWidth="full">content</Container>);
    expect(container.firstChild).toHaveClass('max-w-full');
  });

  it('merges custom className', () => {
    const { container } = render(<Container className="my-class">content</Container>);
    expect(container.firstChild).toHaveClass('my-class');
  });
});
