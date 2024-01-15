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
      <div className='flex h-full flex-col-reverse justify-center overflow-hidden *:w-full xl:flex-row'>
        <div className='flex flex-col justify-between gap-8 overflow-scroll p-8 xl:max-w-[90ch]'>
          {children}
          <Footer />
        </div>
        {session && albums}
        {!session && signin}
      </div>
    </Providers>
  );
};

export default AppLayout;
