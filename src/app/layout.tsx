import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/globals.css';
import Providers from '@/app/providers';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import auth from '@/lib/auth/auth';

interface Props {
  children: ReactNode;
  albums: ReactNode;
  signin: ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Shuffle-it',
  description:
    'Alternative Spotify-UI that adds functionality to shuffle saved albums',
};

const RootLayout = async ({ children, albums, signin }: Props) => {
  const session = await auth();

  return (
    <Providers>
      <html lang='en' className='bg-dark text-light'>
        <body
          className={`${inter.className} flex h-dvh flex-col justify-between divide-y divide-neutral-800 overflow-hidden overscroll-none`}
        >
          <Navbar />
          <div className='flex h-full flex-col-reverse overflow-hidden *:w-full xl:flex-row'>
            <div className='flex flex-col justify-between gap-8 p-8 xl:max-w-[90ch]'>
              {children}
              <Footer />
            </div>
            {session && albums}
            {!session && signin}
          </div>
        </body>
      </html>
    </Providers>
  );
};

export { metadata };
export default RootLayout;
