import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import usePlayback from '@/hooks/usePlayback';
import { getAlbum } from '@/lib/spotifyApi';

interface Props {
  resource: 'album';
  amountOfResource: number;
}

const Shuffle = ({ resource, amountOfResource }: Props) => {
  const { data: session } = useSession();
  if (!session) {
    redirect('/signin');
  }

  const mutation = usePlayback();

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
    <button className='flex' onClick={handleClick}>
      Shuffle
    </button>
  );
};

export default Shuffle;
