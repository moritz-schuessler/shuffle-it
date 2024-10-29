import AlbumLibrary from '@/app/(app)/@library/album-library';
import Button from '@/components/ui/button';
import Link from 'next/link';

import { ArchiveIcon } from '@radix-ui/react-icons';

const Albums = ({ searchParams }: { searchParams: { library: string } }) => {
  const library = searchParams.library !== undefined;

  if (!library) {
    return (
      <aside className='h-full'>
        <Button className='flex h-full flex-col items-center gap-2' asChild>
          <Link href='?library'>
            <ArchiveIcon className='size-6' />
            <div className='[writing-mode:vertical-lr]'>Show Library</div>
          </Link>
        </Button>
      </aside>
    );
  }

  return (
    <aside className='bg-background-200 divide-border flex h-full w-full flex-col divide-y-2 rounded-md'>
      <div className='flex w-full justify-between p-2'>
        <div className='flex items-center p-2'>Album Library</div>
        <Button variant='ghost' className='flex h-full flex-col gap-4' asChild>
          <Link href='?'>Hide Library</Link>
        </Button>
      </div>
      <AlbumLibrary />
    </aside>
  );
};

export default Albums;
