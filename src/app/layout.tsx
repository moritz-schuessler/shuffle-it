import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';

import { Toaster } from 'sonner';

import '@/globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Providers from '@/app/providers';

interface Props {
  children: ReactNode;
}

const metadata: Metadata = {
  title: 'Shuffle-it',
  description:
    'Alternative Spotify-UI that adds functionality to shuffle saved albums',
};

const RootLayout = async ({ children }: Props) => {
  return (
    <Providers>
      <html lang='en' className='bg-background-100 text-foreground-100'>
        <body className={`${GeistSans.className} overscroll-none`}>
          <div className='p-default gap-default flex h-dvh flex-col'>
            <Navbar />
            {children}
            <Footer />
          </div>
          <Toaster
            theme='dark'
            position='bottom-center'
            richColors
            className='toaster group'
          />
        </body>
      </html>
    </Providers>
  );
};

export { metadata };
export default RootLayout;
