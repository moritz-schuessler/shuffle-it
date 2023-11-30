'use client';

import { signIn, signOut, ClientSafeProvider } from 'next-auth/react';

const SignInButton = ({ provider }: { provider: ClientSafeProvider }) => {
  return (
    <button
      className='p-[2rem] bg-[#1DB954] rounded-[2rem]'
      onClick={() => signIn(provider.id)}
    >
      Sign in with {provider.name}
    </button>
  );
};

const SignOutButton = () => {
  return <button onClick={() => signOut()}>Sign out</button>;
};

export { SignInButton, SignOutButton };
