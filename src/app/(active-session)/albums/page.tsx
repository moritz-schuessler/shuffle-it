'use client';

import { useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';

import Album from '@/components/Album';
import Shuffle from '@/components/Shuffle';
import { getAlbums } from '@/lib/spotifyApi';

const Albums = () => {
  const { data: session } = useSession();

  const rootRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100%',
    root: rootRef.current,
    triggerOnce: false,
  });

  const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['albums', session?.access_token],
      queryFn: getAlbums,
      enabled: !!session?.access_token,
      initialPageParam:
        'https://api.spotify.com/v1/me/albums?offset=0&limit=25&locale=*',
      getNextPageParam: (lastPage) => lastPage.next,
    });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status !== 'success') {
    return <main className='overflow-scroll h-full'>Loading...</main>;
  }

  const albums = data?.pages.flatMap((page) => page.items);

  return (
    <main className='overflow-scroll'>
      <Shuffle ressource={'album'} amountOfRessource={data.pages[0].total} />
      <div
        className='grid grid-cols-auto gap-[2rem] h-full'
        ref={rootRef.current}
      >
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
      </div>
    </main>
  );
};

export default Albums;
