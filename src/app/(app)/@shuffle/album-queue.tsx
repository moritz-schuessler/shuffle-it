import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';

const AlbumQueue = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(['queue']) as Album[];

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
              className='flex items-center gap-2 rounded-md bg-gray-200 p-2'
            >
              <div className='flex aspect-square w-12 grow-0'>
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
                <span className='truncate'>{album.name}</span>
                <span className='truncate text-gray-300'>
                  {album.artists.map((artist) => artist.name).join(', ')}
                </span>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default AlbumQueue;
