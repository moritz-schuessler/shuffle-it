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
      <div className='flex h-full justify-between gap-4 overflow-hidden'>
        {signin}
      </div>
    );
  }

  return (
    <div className='flex h-full justify-between gap-4 overflow-hidden'>
      {children}
      {shuffle}
      {library}
    </div>
  );
};

export default AppLayout;
