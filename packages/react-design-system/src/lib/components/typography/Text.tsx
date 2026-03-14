import React from 'react';
import { cn } from '../../utils/cn';

const sizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
} as const;

const variantClasses = {
  default: 'text-neutral-700',
  muted: 'text-neutral-500',
  strong: 'text-neutral-900 font-semibold',
  error: 'text-red-600',
  success: 'text-green-600',
} as const;

export type TextSize = keyof typeof sizeClasses;
export type TextVariant = keyof typeof variantClasses;

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: 'p' | 'span' | 'div' | 'small' | 'strong' | 'em';
  size?: TextSize;
  variant?: TextVariant;
}

export function Text({
  as: Tag = 'p',
  size = 'base',
  variant = 'default',
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Tag
      className={cn(
        'leading-normal',
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
