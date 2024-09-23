import AlbumLibrary from '@/app/(app)/@albums/album-library';

const Albums = ({ searchParams }: { searchParams: { library: string } }) => {
  const library = searchParams.library;

  if (library === undefined) {
    return;
  }

  return (
    <aside className='h-full w-full overflow-scroll px-[var(--window-padding-x)] py-[var(--window-padding-y)]'>
      {<AlbumLibrary />}
    </aside>
  );
};

export default Albums;
