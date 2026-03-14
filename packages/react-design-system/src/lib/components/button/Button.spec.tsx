import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('applies primary variant classes by default', () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-blue-600', 'text-white');
  });

  it('applies secondary variant classes', () => {
    render(<Button variant="secondary">Click</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-slate-200', 'text-slate-800');
  });

  it('applies outline variant classes', () => {
    render(<Button variant="outline">Click</Button>);
    expect(screen.getByRole('button')).toHaveClass('border', 'border-blue-600', 'text-blue-600');
  });

  it('applies ghost variant classes', () => {
    render(<Button variant="ghost">Click</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-blue-600');
  });

  it('applies danger variant classes', () => {
    render(<Button variant="danger">Click</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-red-600', 'text-white');
  });

  it('applies sm size classes', () => {
    render(<Button size="sm">Click</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-sm', 'px-3', 'py-1.5');
  });

  it('applies lg size classes', () => {
    render(<Button size="lg">Click</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-lg', 'px-6', 'py-3');
  });

  it('applies w-full when fullWidth is true', () => {
    render(<Button fullWidth>Click</Button>);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });

  it('is disabled when disabled prop is passed', () => {
    render(<Button disabled>Click</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('is disabled and aria-busy when loading', () => {
    render(<Button loading>Click</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute('aria-busy', 'true');
  });

  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', async () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Click</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
