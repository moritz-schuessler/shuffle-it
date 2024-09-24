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

  return;
}
