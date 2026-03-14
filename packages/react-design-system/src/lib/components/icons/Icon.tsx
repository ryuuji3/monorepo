import React from 'react';
import { cn } from '../../utils/cn';
import {
  CheckIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
  EyeIcon,
  EyeOffIcon,
  PlusIcon,
  MinusIcon,
  MenuIcon,
  InfoIcon,
  WarningIcon,
  SuccessIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  type SvgIconProps,
} from './icons';

const iconMap = {
  check: CheckIcon,
  close: CloseIcon,
  'chevron-down': ChevronDownIcon,
  'chevron-up': ChevronUpIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  search: SearchIcon,
  eye: EyeIcon,
  'eye-off': EyeOffIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  menu: MenuIcon,
  info: InfoIcon,
  warning: WarningIcon,
  success: SuccessIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-left': ArrowLeftIcon,
} as const;

export type IconName = keyof typeof iconMap;

const sizeMap = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const;

export type IconSize = keyof typeof sizeMap;

export interface IconProps extends Omit<SvgIconProps, 'size'> {
  name: IconName;
  size?: IconSize;
  label?: string;
}

export function Icon({ name, size = 'sm', label, className, ...props }: IconProps) {
  const IconComponent = iconMap[name];
  const pixelSize = sizeMap[size];

  return (
    <IconComponent
      size={pixelSize}
      className={cn('inline-block', className)}
      aria-label={label}
      aria-hidden={label ? undefined : 'true'}
      role={label ? 'img' : undefined}
      {...props}
    />
  );
}

export { iconMap };
