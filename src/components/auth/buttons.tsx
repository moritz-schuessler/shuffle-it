'use client';

import { signIn, signOut, ClientSafeProvider } from 'next-auth/react';
import Image from 'next/image';

import spotify_black from '@/assets/spotify_black.png';
import Button from '@/components/Button';

const SignInButton = ({ provider }: { provider: ClientSafeProvider }) => {
  return (
    <Button
      onClick={() => signIn(provider.id)}
      className='flex items-center justify-center gap-2'
    >
      <Image
        width='200'
        height='200'
        src={spotify_black}
        alt='Logo of Spotify'
        className='aspect-square w-[1.5rem]'
      />
      <div>{provider.name}</div>
    </Button>
  );
};

const SignOutButton = () => {
  return <Button onClick={() => signOut()}>Sign out</Button>;
};

export { SignInButton, SignOutButton };
