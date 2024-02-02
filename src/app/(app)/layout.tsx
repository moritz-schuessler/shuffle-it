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
      <div className='mobile:flex-col-reverse flex h-full flex-row justify-center overflow-hidden *:w-full'>
        <div className='mobile:gap-4 mobile:last:*:pb-4 big:max-w-[90ch] mobile:first:*:px-8 mobile:first:*:pt-4 flex flex-col justify-between gap-8 *:px-4 first:*:pt-8 last:*:pb-8'>
          {children}
          <Footer />
        </div>
        <aside className='mobile:*:p-4 h-full overflow-scroll *:p-8'>
          {session && albums}
          {!session && signin}
        </aside>
      </div>
    </Providers>
  );
};

export default AppLayout;
