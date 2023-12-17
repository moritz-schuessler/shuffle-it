import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/globals.css';
import Providers from '@/app/providers';
import Navbar from '@/components/nav/Navbar';

interface Props {
  children: ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Shuffle-it',
  description:
    'Alternative Spotify-UI that adds functionality to shuffle saved albums',
};

const RootLayout = ({ children }: Props) => {
  return (
    <Providers>
      <html
        lang='en'
        className='bg-light text-dark dark:bg-dark dark:text-light'
      >
        <body
          className={`${inter.className} flex h-screen flex-col justify-between divide-y divide-neutral-800 overscroll-none`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </Providers>
  );
};

export { metadata };
export default RootLayout;
