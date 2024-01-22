import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/globals.css';
import Navbar from '@/components/navbar';

interface Props {
  children: ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Shuffle-it',
  description:
    'Alternative Spotify-UI that adds functionality to shuffle saved albums',
};

const RootLayout = async ({ children }: Props) => {
  return (
    <html lang='en' className='bg-dark text-light'>
      <body
        className={`${inter.className} flex h-dvh flex-col justify-between divide-y divide-neutral-800 overscroll-none first:*:p-4 xl:first:*:px-8`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
