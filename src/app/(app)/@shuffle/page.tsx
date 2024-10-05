'use client';

import Button from '@/components/ui/button';
import { PlusIcon } from '@radix-ui/react-icons';

import useQueue from '@/hooks/use-queue';
import usePlayback from '@/hooks/use-playback';
import AlbumQueue from '@/app/(app)/@shuffle/album-queue';
import ActiveDevice from '@/app/(app)/@shuffle/active-device';

const Shuffle = () => {
  const queueMutation = useQueue();
  const playbackMutation = usePlayback();

  if (queueMutation.data === undefined && !queueMutation.isPending) {
    queueMutation.mutate();
  }

  return (
    <main className='overflow-none flex h-full w-full flex-col justify-between gap-2'>
      <div className='flex h-full w-full flex-col gap-2 overflow-scroll mobile:h-fit'>
        <AlbumQueue />
        <Button
          variant='dashed'
          onClick={() => queueMutation.mutate()}
          className='flex items-center justify-center'
        >
          <PlusIcon />
        </Button>
      </div>
      <div className='flex justify-between gap-2'>
        <Button
          onClick={() => playbackMutation.playQueue()}
          className='flex w-full items-center justify-center'
        >
          Play Queue
        </Button>
        <ActiveDevice />
      </div>
    </main>
  );
};

export default Shuffle;
