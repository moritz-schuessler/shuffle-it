'use client';

import { useEffect } from 'react';
import { signIn } from 'next-auth/react';

interface Props {
  error: Error & { digest?: string };
}

export default function Error({ error }: Props) {
  useEffect(() => {
    if (error.message === 'RefreshAccessTokenError') {
      signIn('spotify'); // Force sign in to get a new Access Token and resolve the Error
    }
  }, [error]);

  return (
    <main className='flex h-full flex-col justify-between'>
      <h2>Something went wrong!</h2>
    </main>
  );
}
