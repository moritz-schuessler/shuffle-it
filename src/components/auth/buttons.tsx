'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { signIn, signOut } from 'next-auth/react';
import classNames from 'classnames';

import Button from '@/components/Button';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const SignInButton = ({ children, ...props }: Props) => {
  return (
    <Button
      onClick={() => signIn('spotify')}
      className={classNames(props.className)}
    >
      {children}
    </Button>
  );
};

const SignOutButton = ({ children, ...props }: Props) => {
  return (
    <Button onClick={() => signOut()} className={classNames(props.className)}>
      {children}
    </Button>
  );
};

export { SignInButton, SignOutButton };
