'use client';

import { ReactNode, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';

interface Props {
  children: ReactNode;
  albums: ReactNode;
}

const Layout = ({ children, albums }: Props) => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      console.log('RefreshAccessTokenError');
      signIn('spotify');
    }
  }, [session]);

  return (
    <main className='flex overflow-hidden children:w-full'>
      {children}
      {albums}
    </main>
  );
};

export default Layout;
