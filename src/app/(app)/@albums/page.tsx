import AlbumLibrary from '@/app/(app)/@albums/album-library';
import Button from '@/components/ui/button';
import Link from 'next/link';
import LibraryIcon from '@/assets/icons/library-icon';

const Albums = ({ searchParams }: { searchParams: { library: string } }) => {
  const library = searchParams.library !== undefined;

  if (library) {
    return (
      <aside className='h-full px-[var(--window-padding-x)] py-[var(--window-padding-y)]'>
        <Button
          variant='secondary'
          className='flex h-full flex-col gap-4'
          asChild
        >
          <Link href={`?${library ? '' : 'library'}`}>
            <LibraryIcon />
            <span className='rotate-180 [writing-mode:vertical-lr]'>
              Show Library
            </span>
          </Link>
        </Button>
      </aside>
    );
  }

  return (
    <aside className='h-full w-full overflow-scroll px-[var(--window-padding-x)] py-[var(--window-padding-y)]'>
      {<AlbumLibrary />}
    </aside>
  );
};

export default Albums;
