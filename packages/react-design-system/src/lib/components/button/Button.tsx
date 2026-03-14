import React from 'react';
import { cn } from '../../utils/cn';

const variantClasses = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 focus-visible:ring-blue-500 disabled:bg-blue-300',
  secondary:
    'bg-slate-200 text-slate-800 hover:bg-slate-300 active:bg-slate-400 focus-visible:ring-slate-400 disabled:bg-slate-100 disabled:text-slate-400',
  outline:
    'border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 active:bg-blue-100 focus-visible:ring-blue-500 disabled:border-blue-300 disabled:text-blue-300',
  ghost:
    'text-blue-600 bg-transparent hover:bg-blue-50 active:bg-blue-100 focus-visible:ring-blue-500 disabled:text-blue-300',
  danger:
    'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-500 disabled:bg-red-300',
} as const;

const sizeClasses = {
  sm: 'text-sm px-3 py-1.5 rounded',
  md: 'text-base px-4 py-2 rounded-md',
  lg: 'text-lg px-6 py-3 rounded-lg',
} as const;

export type ButtonVariant = keyof typeof variantClasses;
export type ButtonSize = keyof typeof sizeClasses;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className,
      )}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          {children}
        </>
      ) : (
        children
      )}
    </button>
  );
}
