'use client';

import { useArtist } from '@/hooks/useArtist';

interface Props {
  params: {
    id: string;
  };
}

const Artist = ({ params }: Props) => {
  const { data, status } = useArtist(params.id);

  if (status === 'pending') {
    return <main className='h-full p-8'>Loading...</main>;
  }

  return <main className='h-full p-8'>{data?.name}</main>;
};

export default Artist;
