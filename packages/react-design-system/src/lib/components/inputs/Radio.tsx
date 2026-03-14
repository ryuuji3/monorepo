import React, { useId } from 'react';
import { cn } from '../../utils/cn';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
}

export function Radio({ label, error, id, className, ...props }: RadioProps) {
  const generatedId = useId();
  const radioId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <input
          type="radio"
          id={radioId}
          className={cn(
            'h-4 w-4 border-neutral-300 text-blue-600',
            'focus:ring-2 focus:ring-blue-500 focus:ring-offset-1',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-500',
            className,
          )}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${radioId}-error` : undefined}
          {...props}
        />
        {label && (
          <label htmlFor={radioId} className="text-sm text-neutral-700 cursor-pointer">
            {label}
          </label>
        )}
      </div>
      {error && (
        <p id={`${radioId}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
