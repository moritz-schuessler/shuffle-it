'use client';

import { useEffect, useRef } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';

import Album from '@/components/Album';
import Shuffle from '@/components/Shuffle';
import { getAlbums } from '@/lib/spotifyApi';
import Button from '@/components/Button';

const Albums = () => {
  const { data: session } = useSession();

  const rootRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100%',
    root: rootRef.current,
    triggerOnce: false,
  });

  const {
    data,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['albums'],
    queryFn: ({ pageParam }) =>
      getAlbums(session?.access_token!, session?.expires_at!, { pageParam }),
    enabled: !!session?.access_token,
    initialPageParam: { offset: 0, limit: 20 },
    getNextPageParam: (lastPage) => {
      return {
        offset: lastPage.offset + lastPage.limit,
        limit: lastPage.limit,
      };
    },
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
