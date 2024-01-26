import Image from 'next/image';

import usePlayback from '@/hooks/use-playback';
import Button from '@/components/ui/button';
import { toast } from 'sonner';
import { AlbumToast } from '@/components/toast-variants';

interface Props {
  album: Album;
  access_token: string;
}

const Album = ({ album, access_token }: Props) => {
  const mutation = usePlayback();

  const handleClick = () => {
    mutation.mutate(
      { access_token, uri: album.uri },
      {
        onSuccess: () => {
          toast(<AlbumToast album={album} />);
        },
      },
    );
  };

  return (
    <Button
      variant='secondary'
      rounded='md'
      padding='none'
      onClick={handleClick}
      disabled={mutation.status === 'pending'}
      className='flex flex-row gap-4 p-2 sm:flex-col sm:p-4'
    >
      <div className='flex aspect-square w-12 shrink-0 sm:w-full sm:grow'>
        <Image
          src={album.images[0].url}
          alt={`Album Cover of ${album.name}`}
          width={300}
          height={300}
          unoptimized
          className='aspect-square grow rounded'
        />
      </div>
      <div className='flex flex-col overflow-hidden'>
        <div className='truncate'>{album.name}</div>
        <div className='truncate text-neutral-400'>
          {album.artists.map((artist) => artist.name).join(', ')}
        </div>
      </div>
    </Button>
  );
};

export default Album;
