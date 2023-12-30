import Image from 'next/image';

import usePlayAlbum from '@/hooks/usePlayAlbum';
import Link from 'next/link';
import { PlayIcon } from '@heroicons/react/16/solid';
import Button from '@/components/Button';

interface Props {
  album: Album;
  access_token: string;
}

const Album = ({ album, access_token }: Props) => {
  const mutation = usePlayAlbum();

  const { name, uri, artists, images } = album;

  return (
    <div className='flex grow flex-col overflow-clip rounded-md'>
      <Link
        href={`/albums/${album.id}`}
        className='flex grow flex-col gap-4 bg-neutral-900 p-4 transition hover:bg-neutral-800'
      >
        <div className='flex'>
          <Image
            src={images[0].url}
            alt={`Album Cover of ${name}`}
            width={300}
            height={300}
            unoptimized
            className='aspect-square grow rounded'
          />
        </div>
        <div className='flex flex-col children:truncate'>
          <div>{name}</div>
          <div className='text-neutral-400'>
            {artists.map((artist, i) => (
              <Link key={artist.id} href={`/artists/${artist.id}`}>
                {artist.name}
                {artists.length - 1 !== i && ', '}
              </Link>
            ))}
          </div>
        </div>
      </Link>
      <Button
        variant='secondary'
        rounded='none'
        onClick={() => mutation.mutate({ access_token, uri })}
      >
        <PlayIcon className='h-5 w-5' />
      </Button>
    </div>
  );
};

export default Album;
