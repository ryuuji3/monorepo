import React from 'react';
import { cn } from '../../utils/cn';

const variantClasses = {
  default: 'text-blue-600 hover:text-blue-800 hover:underline',
  muted: 'text-neutral-500 hover:text-neutral-700 hover:underline',
  danger: 'text-red-600 hover:text-red-800 hover:underline',
} as const;

export type LinkVariant = keyof typeof variantClasses;

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  external?: boolean;
}

export function Link({
  variant = 'default',
  external = false,
  className,
  children,
  ...props
}: LinkProps) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      className={cn(
        'transition-colors underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm',
        variantClasses[variant],
        className,
      )}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  );
}
