import * as React from 'react';
import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const ButtonVariants = cva(
  'inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[#649149] text-[#fbf6d1] hover:bg-[#324925] dark:hover:bg-[#566753]',
        secondary: 'bg-[#a8aeaf] text-[#03090a] hover:bg-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-500',
        outline: 'border border-primary text-primary hover:bg-gray-100 dark:border-gray-500 dark:text-gray-100 dark:hover:bg-gray-800',
        ghost: 'bg-transparent text-[#a8aeaf] hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
        link: 'hover:text-blue-500 underline-offset-4 hover:underline dark:hover:text-blue-300',
        destructive: 'bg-[#ff4431] text-white hover:bg-red-600 dark:bg-red-700 dark:text-white dark:hover:bg-red-800',
      },
      shape: {
        square: 'rounded-none',
        rounded: 'rounded-md',
        pill: 'rounded-full',
      },
      size: {
        default: 'px-4 py-2',
        xs: 'px-2 py-1 text-xs',
        sm: 'px-3 py-2 text-sm',
        lg: 'px-5 py-3 text-lg',
        xl: 'px-6 py-3 text-xl',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      shape: 'rounded',
      size: 'default',
    },
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {
  disabled?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, shape, size, className, loading, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(ButtonVariants({ variant, size, shape, className }))}
      {...props}
    >
      {loading ? <span className="spinner"></span> : children}
    </button>
  )
);

Button.displayName = 'Button';

export { Button, ButtonVariants };
