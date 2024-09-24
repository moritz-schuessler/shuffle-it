import AlbumLibrary from '@/app/(app)/@albums/album-library';
import Button from '@/components/ui/button';
import Link from 'next/link';

import { ArchiveIcon } from '@radix-ui/react-icons';

const Albums = ({ searchParams }: { searchParams: { library: string } }) => {
  const library = searchParams.library !== undefined;

  if (!library) {
    return (
      <aside className='h-full'>
        <Button
          variant='secondary'
          className='flex h-full flex-col items-center gap-2 mobile:h-fit mobile:flex-row mobile:items-center mobile:justify-center'
          asChild
        >
          <Link href='?library'>
            <ArchiveIcon className='size-6 mobile:size-5' />
            <div className='[writing-mode:vertical-lr] mobile:[writing-mode:horizontal-tb]'>
              Show Library
            </div>
          </Link>
        </Button>
      </aside>
    );
  }

  return (
    <aside className='flex h-full w-full flex-col gap-2 overflow-scroll rounded-md bg-gray-200 p-2'>
      <div className='flex w-full justify-between'>
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
