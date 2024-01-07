import Image from 'next/image';

import usePlayback from '@/hooks/use-playback';
import Button from '@/components/ui/Button';

interface Props {
  album: Album;
  access_token: string;
}

const Album = ({ album, access_token }: Props) => {
  const mutation = usePlayback();

  return (
    <Button
      variant='secondary'
      rounded='md'
      padding='none'
      onClick={() => {
        return mutation.mutate({ access_token, uri: album.uri });
      }}
      disabled={mutation.status === 'pending'}
      className='flex flex-col gap-2 p-4'
    >
      <div className='flex grow'>
        <Image
          src={album.images[0].url}
          alt={`Album Cover of ${album.name}`}
          width={300}
          height={300}
          unoptimized
          className='aspect-square grow rounded'
        />
      </div>
      <div className='flex flex-col'>
        <div className='truncate'>{album.name}</div>
        <div className='truncate text-neutral-400'>
          {album.artists.map((artist) => artist.name).join(', ')}
        </div>
      </div>
    </Button>
  );
};

export default Album;
