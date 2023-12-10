import { getAlbum, putPlayback } from '@/lib/spotifyApi';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

interface Props {
  resource: 'album';
  amountOfResource: number;
}

const Shuffle = ({ resource, amountOfResource }: Props) => {
  const { data: session } = useSession();
  const mutation = useMutation({
    mutationFn: ({
      access_token,
      uri,
    }: {
      access_token: string;
      uri: string;
    }) => {
      return putPlayback(access_token, uri);
    },
  });

  if (!session) {
    return;
  }

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
