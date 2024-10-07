import { ReactNode } from 'react';

import '@/globals.css';
import { auth } from '@/auth';

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
      <div className='flex h-full justify-between gap-4 overflow-hidden mobile:flex-col-reverse'>
        {signin}
      </div>
    );
  }

  return (
    <div className='flex h-full justify-between gap-4 overflow-hidden mobile:flex-col'>
      {children}
      {shuffle}
      {library}
    </div>
  );
};

export default AppLayout;
