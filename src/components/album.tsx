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
      className='gap-half p-half group flex overflow-hidden sm:flex-col'
    >
      <Image
        src={album.images[0].url}
        alt={`Album Cover of ${album.name}`}
        width={300}
        height={300}
        unoptimized
        className='aspect-square w-12 grow-0 rounded sm:w-full'
      />
      <div className='flex w-full flex-col overflow-hidden'>
        <div className='w-full truncate'>{album.name}</div>
        <div className='text-foreground-200 w-full truncate'>
          {album.artists.map((artist) => artist.name).join(', ')}
        </div>
      </div>
    </Button>
  );
};

export default Album;
