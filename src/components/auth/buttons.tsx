'use client';

import { signIn, signOut, ClientSafeProvider } from 'next-auth/react';

import Button from '@/components/Button';
import SpotifyIcon from '@/assets/icons/SpotifyIcon';

const SignInButton = ({ provider }: { provider: ClientSafeProvider }) => {
  return (
    <Button
      onClick={() => signIn(provider.id)}
      className='flex items-center justify-center gap-2'
    >
      <SpotifyIcon color='black' />
      <div>{provider.name}</div>
    </Button>
  );
};

const SignOutButton = () => {
  return <Button onClick={() => signOut()}>Sign out</Button>;
};

export { SignInButton, SignOutButton };
