'use client';

import { signIn } from 'next-auth/react';

import { useAlbumById } from '@/hooks/useAlbumById';

interface Props {
  params: {
    id: string;
  };
}

const Album = ({ params }: Props) => {
  const { data, status, error } = useAlbumById(params.id);

  if (status === 'pending') {
    return <main className='h-full overflow-scroll'>Loading...</main>;
  }

  if (status === 'error') {
    signIn('spotify');
    return <main className='h-full overflow-scroll'>{error.message}</main>;
  }

  return (
    <main className='h-full gap-[2rem] overflow-scroll p-[2rem]'>
      {data?.name}
    </main>
  );
};

export default Album;
