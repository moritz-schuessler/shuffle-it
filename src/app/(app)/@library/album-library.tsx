'use client';

import { signIn, useSession } from 'next-auth/react';
import useLibrary from '@/hooks/use-library';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Album from '@/components/album';

const AlbumLibrary = () => {
  const { data: session } = useSession();

  const {
    data,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useLibrary();

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
    return 'Loading...';
  }

  if (status === 'error') {
    signIn('spotify');
    return error.message;
  }

  const albums = data?.pages.flatMap((page) => page.items);

  return (
    <div className='grid w-full grid-cols-auto gap-4' ref={rootRef.current}>
      {albums.map((album, i) => {
        if (albums?.length === i + 1 && hasNextPage) {
          return (
            <div key={album.album.id} className='flex flex-col' ref={ref}>
              <Album album={album.album} />
            </div>
          );
        }
        return <Album key={album.album.id} album={album.album} />;
      })}
      {hasNextPage || isFetchingNextPage ? <div>Loading...</div> : null}
    </div>
  );
};

export default AlbumLibrary;
