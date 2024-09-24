import { ReactNode } from 'react';

import '@/globals.css';
import Providers from '@/app/providers';
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
      <div className='flex h-full gap-4 overflow-hidden mobile:flex-col-reverse'>
        {children}
        {session && albums}
        {!session && signin}
      </div>
    </Providers>
  );
};

export default AppLayout;
