'use client';

import Button from '@/components/ui/button';
import { PlusIcon } from '@radix-ui/react-icons';

import useQueue from '@/hooks/use-queue';
import usePlayback from '@/hooks/use-playback';
import AlbumQueue from '@/app/(app)/@shuffle/album-queue';
import Devices from '@/app/(app)/@shuffle/devices';

const Shuffle = () => {
  const queueMutation = useQueue();
  const playbackMutation = usePlayback();

  if (queueMutation.data === undefined && !queueMutation.isPending) {
    queueMutation.mutate();
  }

  return (
    <main className='flex h-full w-full flex-col justify-between gap-half overflow-scroll'>
      <div className='flex h-full w-full flex-col gap-half overflow-scroll'>
        <AlbumQueue />
        <Button
          variant='dashed'
          onClick={() => queueMutation.mutate()}
          className='flex justify-center'
        >
          <PlusIcon />
        </Button>
      </div>
      <form
        action={playbackMutation.playQueue}
        className='flex justify-between gap-half'
      >
        <Button type='submit' className='flex w-full justify-center'>
          Play Queue
        </Button>
        <Devices />
      </form>
    </main>
  );
};

export default Shuffle;
