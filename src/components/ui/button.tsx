'use client';

import { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva(['transition duration-75 rounded-md'], {
  variants: {
    variant: {
      default: 'bg-light text-dark hover:bg-neutral-300',
      secondary: 'bg-neutral-900 hover:bg-neutral-800',
      ghost: 'hover:bg-neutral-800',
    },
    rounded: {
      none: 'rounded-none',
      md: 'rounded-md',
    },
    padding: {
      default: 'px-4 py-2',
      none: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    rounded: 'md',
    padding: 'default',
  },
});

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({
  className,
  variant,
  rounded,
  padding,
  asChild = false,
  ...props
}: Props) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={buttonVariants({ variant, rounded, padding, className })}
      {...props}
    />
  );
};

export default Button;
