'use client';

import { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  ['transition duration-75 rounded-md px-2 py-2 rounded-md'],
  {
    variants: {
      variant: {
        default: 'bg-gray-200 hover:bg-gray-100',
        secondary: 'bg-white text-black hover:bg-gray-400',
        ghost: 'hover:bg-gray-100',
        dashed: 'border-dashed border-2 border-gray-200 hover:border-gray-100',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({ className, variant, asChild = false, ...props }: Props) => {
  const Comp = asChild ? Slot : 'button';

  return <Comp className={buttonVariants({ variant, className })} {...props} />;
};

export default Button;
