'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useAtomValue } from 'jotai';

import Button from '@/components/ui/Button';
import usePlayback from '@/hooks/use-playback';
import totalSavedAlbumsAtom from '@/lib/atoms/total-saved-albums-atom';

const Shuffle = () => {
  const [isPending, setIsPending] = useState(false);
  const { data: session } = useSession();
  const totalSavedAlbums = useAtomValue(totalSavedAlbumsAtom);

  const mutation = usePlayback();

  const handleClick = async () => {
    setIsPending(true);

    const offset = Math.floor(Math.random() * totalSavedAlbums) - 1;

    const response = await fetch(
      `https://api.spotify.com/v1/me/albums?offset=${offset}&limit=1&locale=*`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${session!.access_token!}`,
        },
      },
    );

    const data: Albums = await response.json();
    const album = data.items[0].album;

    mutation.mutate({ access_token: session!.access_token!, uri: album.uri });
    setIsPending(false);
  };

  return (
    <Button
      variant='secondary'
      onClick={handleClick}
      className='flex items-center justify-center'
      disabled={!totalSavedAlbums || isPending}
    >
      {!isPending ? 'Shuffle' : 'Shuffling...'}
    </Button>
  );
};

export default Shuffle;
