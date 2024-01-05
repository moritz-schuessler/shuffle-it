'use client';

import { useSession } from 'next-auth/react';
import { useAtomValue } from 'jotai';

import Button from '@/components/ui/Button';
import usePlayback from '@/hooks/usePlayback';
import totalSavedAlbumsAtom from '@/lib/atoms/totalSavedAlbumsAtom';
import { getAlbum } from '@/lib/spotifyApi';

const Shuffle = () => {
  const { data: session } = useSession();
  const totalSavedAlbums = useAtomValue(totalSavedAlbumsAtom);

  const mutation = usePlayback();

  const handleClick = async () => {
    const offset = Math.floor(Math.random() * totalSavedAlbums) - 1;

    const response = await getAlbum(session!.access_token!, offset);
    const album = response.items[0].album;

    mutation.mutate({ access_token: session!.access_token!, uri: album.uri });
  };

  return (
    <Button
      variant='secondary'
      onClick={handleClick}
      className='flex items-center justify-center'
      disabled={!totalSavedAlbums}
    >
      Shuffle
    </Button>
  );
};

export default Shuffle;
