import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

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
    <html lang='en' className='bg-black text-white'>
      <body
        className={`${inter.className} flex h-dvh flex-col justify-between divide-y divide-gray-100 overscroll-none`}
      >
        <Navbar />
        {children}
        <Toaster
          theme='dark'
          position='bottom-center'
          richColors
          className='toaster group'
          toastOptions={{
            classNames: {
              toast:
                'group toast group-[.toaster]:bg-black group-[.toaster]:border-gray-100',
            },
          }}
        />
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;
