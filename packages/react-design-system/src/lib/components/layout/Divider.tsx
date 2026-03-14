import React from 'react';
import { cn } from '../../utils/cn';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'solid' | 'dashed' | 'dotted';
  label?: string;
}

export function Divider({
  orientation = 'horizontal',
  variant = 'solid',
  label,
  className,
  ...props
}: DividerProps) {
  const borderStyle =
    variant === 'dashed' ? 'border-dashed' : variant === 'dotted' ? 'border-dotted' : 'border-solid';

  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn('inline-block h-full border-l border-neutral-200', borderStyle, className)}
        {...(props as React.HTMLAttributes<HTMLDivElement>)}
      />
    );
  }

  if (label) {
    return (
      <div className={cn('flex items-center gap-3', className)}>
        <hr className={cn('flex-1 border-t border-neutral-200', borderStyle)} />
        <span className="text-sm text-neutral-500">{label}</span>
        <hr className={cn('flex-1 border-t border-neutral-200', borderStyle)} />
      </div>
    );
  }

  return (
    <hr
      className={cn('w-full border-t border-neutral-200', borderStyle, className)}
      {...props}
    />
  );
}
