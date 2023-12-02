import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';
import { putPlayback } from '@/lib/spotifyApi';

interface Props {
  album: Album;
  access_token: string;
}

const Album = ({ album, access_token }: Props) => {
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

  const { name, uri, artists, images } = album;

  return (
    <button
      onClick={() => mutation.mutate({ access_token, uri })}
      className='flex grow flex-col gap-[1rem] rounded-md bg-neutral-900 p-[1rem]'
    >
      <div className='flex grow'>
        <Image
          src={images[0].url}
          alt={`Album Cover of ${name}`}
          width={300}
          height={300}
          unoptimized
          className='aspect-square grow rounded'
        />
      </div>
      <div className='flex flex-col  children:truncate'>
        <a>{name}</a>
        <div className='text-neutral-400'>
          {artists.map((artist) => artist.name).join(', ')}
        </div>
      </div>
    </button>
  );
};

export default Album;
