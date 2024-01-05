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
      <html
        lang='en'
        className='bg-light text-dark dark:bg-dark dark:text-light'
      >
        <body
          className={`${inter.className} flex h-screen flex-col justify-between divide-y divide-neutral-800 overscroll-none`}
        >
          <Navbar />
          <div className='flex h-full overflow-hidden children:w-full'>
            <div className='flex h-full max-w-[90ch] flex-col justify-between gap-8 p-8'>
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
