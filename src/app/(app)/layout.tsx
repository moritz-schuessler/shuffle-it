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
        <div className='flex flex-col justify-between gap-4 *:px-4 first:*:pt-4 last:*:pb-4 xl:max-w-[90ch] xl:gap-8 xl:first:*:px-8 xl:first:*:pt-8 xl:last:*:pb-8'>
          {children}
          <Footer />
        </div>
        <aside className='h-full overflow-scroll *:p-4 xl:*:p-8'>
          {session && albums}
          {!session && signin}
        </aside>
      </div>
    </Providers>
  );
};

export default AppLayout;
