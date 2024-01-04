'use client';

import { ReactNode, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';

import Footer from '@/app/(active-session)/Footer';

interface Props {
  children: ReactNode;
  albums: ReactNode;
  signin: ReactNode;
}

const Layout = ({ children, albums, signin }: Props) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      console.log('RefreshAccessTokenError');
      signIn('spotify');
    }
  }, [session]);

  return (
    <div className='flex h-full overflow-hidden children:w-full'>
      <div className='flex h-full max-w-[90ch] flex-col justify-between gap-8 p-8'>
        {children}
        <Footer />
      </div>
      {status === 'authenticated' && albums}
      {status === 'unauthenticated' && signin}
    </div>
  );
};

export default Layout;
