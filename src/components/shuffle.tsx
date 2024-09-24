'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

import Button from '@/components/ui/button';
import usePlayback from '@/hooks/use-playback';
import useTotalSavedAlbums from '@/hooks/use-total-saved-albums';
import { toast } from 'sonner';
import { AlbumToast } from '@/components/toast-variants';

const Shuffle = () => {
  const [isPending, setIsPending] = useState(false);
  const { data: session } = useSession();

  const totalSavedAlbums = useTotalSavedAlbums();

  const mutation = usePlayback();

  const handleClick = async () => {
    setIsPending(true);

    const offset = Math.floor(Math.random() * totalSavedAlbums!);

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

    mutation.mutate(
      { access_token: session!.access_token!, uri: album.uri },
      {
        onSuccess: () => {
          toast(<AlbumToast album={album} />);
        },
        onSettled: () => {
          setIsPending(false);
        },
      },
    );
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
