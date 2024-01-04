'use client';

import { ReactNode, useEffect } from 'react';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';

import Button from '@/components/Button';
import GithubIcon from '@/assets/icons/GithubIcon';
import SpotifyIcon from '@/assets/icons/SpotifyIcon';

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

const Footer = () => {
  return (
    <footer className='flex items-center justify-center gap-4'>
      <Button variant='ghost' asChild>
        <Link href={'/privacy'}>Privacy</Link>
      </Button>
      <Button variant='ghost' asChild>
        <Link
          href={'https://github.com/moritz-schuessler/shuffle-it'}
          target='_blank'
          className='flex gap-2'
        >
          <GithubIcon color='white' />
          <div>Project</div>
        </Link>
      </Button>
      <Button variant='ghost' asChild>
        <Link
          href={'https://open.spotify.com/'}
          target='_blank'
          className='flex gap-2'
        >
          <SpotifyIcon color='white' />
          <div>Spotify</div>
        </Link>
      </Button>
    </footer>
  );
};

export default Layout;
