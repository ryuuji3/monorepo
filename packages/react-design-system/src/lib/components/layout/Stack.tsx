import React from 'react';
import { cn } from '../../utils/cn';

const spacingClasses: Record<string, string> = {
  '0': 'gap-0',
  '1': 'gap-1',
  '2': 'gap-2',
  '3': 'gap-3',
  '4': 'gap-4',
  '5': 'gap-5',
  '6': 'gap-6',
  '8': 'gap-8',
  '10': 'gap-10',
  '12': 'gap-12',
  '16': 'gap-16',
};

export type StackSpacing = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: StackSpacing;
  horizontal?: boolean;
}

export function Stack({
  spacing = '4',
  horizontal = false,
  className,
  children,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        'flex',
        horizontal ? 'flex-row' : 'flex-col',
        spacingClasses[spacing],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
