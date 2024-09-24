import AlbumLibrary from '@/app/(app)/@albums/album-library';
import Button from '@/components/ui/button';
import Link from 'next/link';
import LibraryIcon from '@/assets/icons/library-icon';

const Albums = ({ searchParams }: { searchParams: { library: string } }) => {
  const library = searchParams.library !== undefined;

  if (!library) {
    return (
      <aside className='h-full px-[var(--window-padding-x)] py-[var(--window-padding-y)]'>
        <Button
          variant='secondary'
          className='flex h-full flex-col gap-4'
          asChild
        >
          <Link href='?library'>
            <LibraryIcon />
            <div className='[writing-mode:vertical-lr]'>Show Library</div>
          </Link>
        </Button>
      </aside>
    );
  }

  return (
    <aside className='h-full w-full px-[var(--window-padding-x)] py-[var(--window-padding-y)]'>
      <div className='flex h-full flex-col gap-2 overflow-scroll rounded-md bg-gray-200 p-2'>
        <div className='flex w-full justify-between'>
          <div className='flex items-center p-2'>Album Library</div>
          <Button
            variant='ghost'
            className='flex h-full flex-col gap-4'
            asChild
          >
            <Link href='?'>Hide Library</Link>
          </Button>
        </div>
        <AlbumLibrary />
      </div>
    </aside>
  );
};

export default Albums;
