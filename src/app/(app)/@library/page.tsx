import AlbumLibrary from '@/app/(app)/@library/album-library';
import Button from '@/components/ui/button';
import Link from 'next/link';

import { ArchiveIcon } from '@radix-ui/react-icons';

const Albums = ({ searchParams }: { searchParams: { library: string } }) => {
  const library = searchParams.library !== undefined;

  if (!library) {
    return (
      <aside className='min-h-fit sm:h-full'>
        <Button
          className='flex h-full justify-center gap-half sm:flex-col sm:justify-start'
          asChild
        >
          <Link href='?library'>
            <ArchiveIcon className='size-6' />
            <div className='sm:[writing-mode:vertical-lr]'>Show Library</div>
          </Link>
        </Button>
      </aside>
    );
  }

  return (
    <aside className='divide-y-2 divide-border overflow-scroll rounded-md bg-background-200 sm:w-full'>
      <div className='flex items-center justify-between p-half'>
        <div className='p-half'>Album Library</div>
        <Button variant='ghost' className='gap-default' asChild>
          <Link href='?'>Hide Library</Link>
        </Button>
      </div>
      <AlbumLibrary />
    </aside>
  );
};

export default Albums;
