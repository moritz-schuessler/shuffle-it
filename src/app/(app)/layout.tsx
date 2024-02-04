import { ReactNode } from 'react';

import '@/globals.css';
import Providers from '@/app/providers';
import Footer from '@/components/footer';
import auth from '@/lib/auth/auth';

interface Props {
  children: ReactNode;
  albums: ReactNode;
  signin: ReactNode;
}

const AppLayout = async ({ children, albums, signin }: Props) => {
  const session = await auth();

  return (
    <Providers>
      <div className='mobile:flex-col-reverse flex h-full flex-row justify-center overflow-hidden *:w-full '>
        <div className='mobile:gap-4 big:max-w-[90ch] flex flex-col justify-between gap-8 *:px-[var(--window-padding-x)] first:*:pt-[var(--window-padding-y)] last:*:pb-[var(--window-padding-y)]'>
          <main className='flex h-full flex-col justify-between gap-4'>
            {children}
          </main>
          <Footer />
        </div>
        <aside className='overflow-scroll *:px-[var(--window-padding-x)] first:*:pt-[var(--window-padding-y)] last:*:pb-[var(--window-padding-y)]'>
          {session && albums}
          {!session && signin}
        </aside>
      </div>
    </Providers>
  );
};

export default AppLayout;
