'use client';

import { ReactNode, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      console.log('RefreshAccessTokenError');
      signIn('spotify');
    }
  }, [session]);

  return <>{children}</>;
};

export default Layout;
