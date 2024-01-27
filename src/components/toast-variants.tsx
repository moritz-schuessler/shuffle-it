import Image from 'next/image';

const AlbumToast = ({ album }: { album: Album }) => {
  return (
    <div className='flex min-w-0 items-center gap-4'>
      <div className='flex aspect-square w-12 shrink'>
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
    </div>
  );
};

export { AlbumToast };
