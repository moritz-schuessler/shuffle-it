import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import usePlayAlbum from '@/hooks/usePlayAlbum';
import { getAlbum } from '@/lib/spotifyApi';
import Button from '@/components/Button';

interface Props {
  resource: 'album';
  amountOfResource: number;
}

const Shuffle = ({ resource, amountOfResource }: Props) => {
  const { data: session } = useSession();
  if (!session) {
    redirect('/signin');
  }

  const mutation = usePlayAlbum();

  const handleClick = async () => {
    let uri = '';
    const offset = Math.floor(Math.random() * amountOfResource) - 1;
    if (resource === 'album') {
      const response = await getAlbum(session.access_token!, offset);
      const album = response.items[0].album;
      uri = album.uri;
    }
    mutation.mutate({ access_token: session.access_token!, uri });
  };

  return (
    <Button variant='secondary' onClick={handleClick}>
      Shuffle
    </Button>
  );
};

export default Shuffle;
