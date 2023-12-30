'use client';

import { signIn, signOut, ClientSafeProvider } from 'next-auth/react';
import Image from 'next/image';

import spotify_black from '@/assets/spotify_black.png';

const SignInButton = ({ provider }: { provider: ClientSafeProvider }) => {
  return (
    <button
      className='flex flex-row gap-[.5rem]'
      onClick={() => signIn(provider.id)}
    >
      <Image
        width='200'
        height='200'
        src={spotify_black}
        alt='Logo of Spotify'
        className='aspect-square w-[1.5rem]'
      />
      <div>{provider.name}</div>
    </button>
  );
};

const SignOutButton = () => {
  return <button onClick={() => signOut()}>Sign out</button>;
};

export { SignInButton, SignOutButton };
