import React from 'react';
import { cn } from '../../utils/cn';

const maxWidthClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
  none: '',
} as const;

export type ContainerMaxWidth = keyof typeof maxWidthClasses;

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: ContainerMaxWidth;
  centered?: boolean;
}

export function Container({
  maxWidth = 'lg',
  centered = true,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'w-full px-4',
        maxWidthClasses[maxWidth],
        centered && 'mx-auto',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
