'use client';

import { signIn } from 'next-auth/react';
import useLibrary from '@/hooks/use-library';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Album from '@/components/album';

const AlbumLibrary = () => {
  const {
    data,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useLibrary();

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100%',
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
    <div className='grid w-full gap-default overflow-scroll p-half sm:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
      {albums.map((album, i) => {
        if (albums?.length === i + 1 && hasNextPage) {
          return (
            <div key={album.album.id} ref={ref}>
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
