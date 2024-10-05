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
      <html lang='en' className='bg-black text-white'>
        <body className={`${GeistSans.className}`}>
          <div className=' flex h-dvh flex-col gap-4 overscroll-none p-4'>
            <Navbar />
            {children}
            <Footer />
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
          </div>
        </body>
      </html>
    </Providers>
  );
};

export { metadata };
export default RootLayout;
