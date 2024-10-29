import Image from 'next/image';

import Button from '@/components/ui/button';
import { useQueryClient } from '@tanstack/react-query';

interface Props {
  album: Album;
}

const Album = ({ album }: Props) => {
  const queryClient = useQueryClient();

  const handleClick = () => {
    queryClient.setQueryData(['queue'], (oldData: Album[]) => [
      ...oldData,
      album,
    ]);
  };

  return (
    <Button
      onClick={handleClick}
      variant='ghost'
      className='flex flex-col gap-2 p-2'
    >
      <div className='flex aspect-square shrink-0 grow'>
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
        <div className='text-foreground-200 truncate'>
          {album.artists.map((artist) => artist.name).join(', ')}
        </div>
      </div>
    </Button>
  );
};

export default Album;
