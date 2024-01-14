'use client';

import { useEffect, useRef } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useInView } from 'react-intersection-observer';

import useAlbums from '@/hooks/use-albums';
import Album from '@/components/album';

const Albums = () => {
  const { data: session } = useSession();

  const {
    data,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useAlbums();

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
    <div
      className='grid grid-cols-auto gap-8 overflow-scroll p-8'
      ref={rootRef.current}
    >
      {albums.map((album, i) => {
        if (albums?.length === i + 1 && hasNextPage) {
          return (
            <div key={album.album.id} className='flex flex-col' ref={ref}>
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
    </div>
  );
};

export default Albums;
