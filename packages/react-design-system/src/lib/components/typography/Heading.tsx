import React from 'react';
import { cn } from '../../utils/cn';

const asToSizeMap = {
  h1: '4xl',
  h2: '3xl',
  h3: '2xl',
  h4: 'xl',
  h5: 'lg',
  h6: 'base',
} as const;

const sizeClasses = {
  '6xl': 'text-6xl',
  '5xl': 'text-5xl',
  '4xl': 'text-4xl',
  '3xl': 'text-3xl',
  '2xl': 'text-2xl',
  xl: 'text-xl',
  lg: 'text-lg',
  base: 'text-base',
  sm: 'text-sm',
} as const;

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
} as const;

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingSize = keyof typeof sizeClasses;
export type HeadingWeight = keyof typeof weightClasses;

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  size?: HeadingSize;
  weight?: HeadingWeight;
}

export function Heading({
  as: Tag = 'h2',
  size,
  weight = 'bold',
  className,
  children,
  ...props
}: HeadingProps) {
  const resolvedSize = size ?? (asToSizeMap[Tag] as HeadingSize);

  return (
    <Tag
      className={cn(
        'text-neutral-900 leading-tight',
        sizeClasses[resolvedSize],
        weightClasses[weight],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
