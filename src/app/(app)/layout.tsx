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
      <div className='flex h-full flex-row justify-center overflow-hidden mobile:flex-col-reverse '>
        <div className='flex w-full flex-col justify-between gap-8 *:px-[var(--window-padding-x)] first:*:pt-[var(--window-padding-y)] last:*:pb-[var(--window-padding-y)] mobile:gap-4 '>
          <main className='flex h-full flex-col justify-between gap-4'>
            {children}
          </main>
          <Footer />
        </div>
        {session && albums}
        {!session && signin}
      </div>
    </Providers>
  );
};

export default AppLayout;
