import React from 'react';
import { cn } from '../../utils/cn';

const directionClasses = {
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
  col: 'flex-col',
  'col-reverse': 'flex-col-reverse',
} as const;

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
} as const;

const justifyClasses = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
} as const;

const wrapClasses = {
  wrap: 'flex-wrap',
  nowrap: 'flex-nowrap',
  'wrap-reverse': 'flex-wrap-reverse',
} as const;

const gapClasses: Record<string, string> = {
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

export type FlexDirection = keyof typeof directionClasses;
export type FlexAlign = keyof typeof alignClasses;
export type FlexJustify = keyof typeof justifyClasses;
export type FlexWrap = keyof typeof wrapClasses;
export type FlexGap = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: FlexDirection;
  align?: FlexAlign;
  justify?: FlexJustify;
  wrap?: FlexWrap;
  gap?: FlexGap;
  inline?: boolean;
}

export function Flex({
  direction = 'row',
  align,
  justify,
  wrap,
  gap,
  inline = false,
  className,
  children,
  ...props
}: FlexProps) {
  return (
    <div
      className={cn(
        inline ? 'inline-flex' : 'flex',
        directionClasses[direction],
        align && alignClasses[align],
        justify && justifyClasses[justify],
        wrap && wrapClasses[wrap],
        gap !== undefined && gapClasses[gap],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
