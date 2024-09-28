import { useSession } from 'next-auth/react';
import { useInfiniteQuery } from '@tanstack/react-query';

import getAlbums from '@/lib/spotify/get-albums';

const useLibrary = () => {
  const { status } = useSession();

  return useInfiniteQuery({
    queryKey: ['albums'],
    queryFn: ({ pageParam }) => getAlbums(pageParam.offset, pageParam.limit),
    enabled: status === 'authenticated',
    initialPageParam: { offset: 0, limit: 20 },
    getNextPageParam: (lastPage) => {
      if (lastPage.next) {
        return {
          offset: lastPage.offset + lastPage.limit,
          limit: lastPage.limit,
        };
      }
    },
  });
};

export default useLibrary;
