'use client';

import { useEffect, useRef } from 'react';
import { redirect } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useInView } from 'react-intersection-observer';

import useAlbums from '@/hooks/useAlbums';
import Album from '@/components/Album';
import Shuffle from '@/components/Shuffle';
import Button from '@/components/Button';

const Albums = () => {
  const { data: session } = useSession();
  if (!session) {
    redirect('/signin');
  }

  const {
    data,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useAlbums(session?.access_token, session?.expires_at);

  const rootRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100%',
    root: rootRef.current,
    triggerOnce: false,
  });
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status === 'pending') {
    return <main className='h-full overflow-scroll'>Loading...</main>;
  }

  if (status === 'error') {
    signIn('spotify');
    return <main className='h-full overflow-scroll'>{error.message}</main>;
  }

  const albums = data?.pages.flatMap((page) => page.items);

  return (
    <main
      className='grid h-full grid-cols-auto gap-[2rem] overflow-scroll p-[2rem]'
      ref={rootRef.current}
    >
      <Button style='neutral-900' width='full' height='full'>
        <Shuffle resource={'album'} amountOfResource={data.pages[0].total} />
      </Button>
      {albums.map((album, i) => {
        if (albums?.length === i + 1 && hasNextPage) {
          return (
            <div key={album.album.id} className='flex' ref={ref}>
              <Album
                album={album.album}
                access_token={session!.access_token!}
              />
            </div>
          );
        }
        return (
          <Album
            key={album.album.id}
            album={album.album}
            access_token={session!.access_token!}
          />
        );
      })}
      {hasNextPage || isFetchingNextPage ? <div>Loading...</div> : null}
    </main>
  );
};

export default Albums;
