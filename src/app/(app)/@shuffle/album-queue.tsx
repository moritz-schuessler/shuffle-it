import { useQuery, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import Button from '@/components/ui/button';
import { Cross1Icon } from '@radix-ui/react-icons';

const AlbumQueue = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery<Album[]>({
    queryKey: ['queue'],
    initialData: [],
  });

  return (
    <>
      {data &&
        data.map((album, index) => {
          if (album === undefined) {
            return null;
          }
          return (
            <div
              key={index + album.id}
              className='bg-background-200 p-half flex items-center justify-between rounded-md'
            >
              <div className='flex gap-2 overflow-hidden'>
                <div className='flex aspect-square w-12 shrink-0 grow-0'>
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
                  <span className='truncate'>{album.name}</span>
                  <span className='text-foreground-200 truncate'>
                    {album.artists.map((artist) => artist.name).join(', ')}
                  </span>
                </div>
              </div>
              <div className='shrink-0'>
                <Button
                  variant='ghost'
                  onClick={() => {
                    queryClient.setQueryData(['queue'], (oldData: Album[]) => [
                      ...oldData.filter((value, i) => i !== index),
                    ]);
                  }}
                >
                  <Cross1Icon aria-label='Remove Album from Queue' />
                </Button>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default AlbumQueue;
