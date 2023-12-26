import Image from 'next/image';

import usePlayback from '@/hooks/usePlayback';
import Link from 'next/link';

interface Props {
  album: Album;
  access_token: string;
}

const Album = ({ album, access_token }: Props) => {
  const mutation = usePlayback();

  const { name, uri, artists, images } = album;

  return (
    <div className='flex grow flex-col overflow-clip rounded-md'>
      <Link
        href={`/albums/${album.id}`}
        className='flex grow flex-col gap-[1rem] bg-neutral-900 p-[1rem] transition hover:bg-neutral-800'
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
          <a>{name}</a>
          <div className='text-neutral-400'>
            {artists.map((artist) => artist.name).join(', ')}
          </div>
        </div>
      </Link>
      <button
        onClick={() => mutation.mutate({ access_token, uri })}
        className='bg-neutral-900 p-[1rem] hover:bg-neutral-800'
      >
        Play
      </button>
    </div>
  );
};

export default Album;
