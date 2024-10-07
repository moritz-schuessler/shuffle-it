import { useInfiniteQuery } from '@tanstack/react-query';
import { getAlbums } from '@/lib/spotify-api';
import { getSession } from 'next-auth/react';

const useLibrary = () => {
  return useInfiniteQuery({
    queryKey: ['albums'],
    queryFn: ({ pageParam }) =>
      queryFunction(pageParam.offset, pageParam.limit),
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

const queryFunction = async (offset: number, limit: number) => {
  const session = await getSession();

  if (!session) {
    throw new Error('No Session');
  }

  if (Date.now() >= session.expires_at) {
    throw new Error('Access Token is invalid');
  }

  return await getAlbums(session.access_token, offset, limit);
};

export default useLibrary;
