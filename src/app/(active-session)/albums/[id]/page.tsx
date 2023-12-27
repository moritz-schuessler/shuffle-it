'use client';

import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';

import { useAlbumById } from '@/hooks/useAlbumById';
import usePlayAlbum from '@/hooks/usePlayAlbum';
import usePlayTrack from '@/hooks/usePlayTrack';
import Link from 'next/link';
import Button from '@/components/Button';

interface Props {
  params: {
    id: string;
  };
}

const Album = ({ params }: Props) => {
  const { data: session } = useSession();
  const { data, status, error } = useAlbumById(params.id);

  const albumMutation = usePlayAlbum();
  const trackMutation = usePlayTrack();

  if (status === 'pending') {
    return <main className='h-full overflow-scroll'>Loading...</main>;
  }

  if (status === 'error') {
    signIn('spotify');
    return <main className='h-full overflow-scroll'>{error.message}</main>;
  }

  return (
    <main className='flex h-full flex-col gap-6 overflow-scroll p-8'>
      <div className=' flex flex-col rounded-lg bg-neutral-900'>
        <div className='flex items-end justify-between gap-2 rounded-t-md p-4 '>
          <div className='flex gap-2 overflow-hidden truncate text-2xl'>
            <h2>{data?.name}</h2>
            <div className='truncate text-neutral-400'>
              {data.artists.map((artist, i) => (
                <Link key={artist.id} href={`/artists/${artist.id}`}>
                  {artist.name}
                  {data.artists.length - 1 !== i && ', '}
                </Link>
              ))}
            </div>
          </div>
          <Image
            src={data?.images[0].url}
            alt={'Album Cover of ' + data?.name}
            width={150}
            height={150}
            unoptimized
            className='aspect-square rounded-md'
          />
        </div>
        <button
          onClick={() =>
            albumMutation.mutate({
              access_token: session?.access_token!,
              uri: data?.uri,
            })
          }
          className='rounded-b-md p-4 hover:bg-neutral-800'
        >
          Play
        </button>
      </div>
      <div className='flex flex-col gap-4'>
        {data?.tracks.items.map((track) => (
          <div key={track.id} className='flex justify-between gap-2'>
            <div className='flex gap-2'>
              <h3>{track.name}</h3>
              <div className='text-neutral-400'>
                {track.artists.map((artist, i) => (
                  <Link key={artist.id} href={`/artists/${artist.id}`}>
                    {artist.name}
                    {track.artists.length - 1 !== i && ', '}
                  </Link>
                ))}
              </div>
            </div>
            <Button
              variant='ghost'
              size='slim'
              onClick={() =>
                trackMutation.mutate({
                  access_token: session?.access_token!,
                  uri: track?.uri,
                })
              }
            >
              Play
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Album;
