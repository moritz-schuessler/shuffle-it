import { ReactNode } from 'react';

import '@/globals.css';
import auth from '@/lib/auth/auth';

interface Props {
  children: ReactNode;
  shuffle: ReactNode;
  library: ReactNode;
  signin: ReactNode;
}

const AppLayout = async ({ children, shuffle, library, signin }: Props) => {
  const session = await auth();

  if (!session) {
    return (
      <div className='flex h-full justify-between gap-default overflow-hidden'>
        {signin}
      </div>
    );
  }

  return (
    <>
      {children}
      <div className='flex h-full flex-col justify-between gap-half overflow-hidden sm:flex-row'>
        {shuffle}
        {library}
      </div>
    </>
  );
};

export default AppLayout;
