import { useInfiniteQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

const getAlbums = async (
  access_token: string,
  expires_at: number,
  { pageParam }: { pageParam: { offset: number; limit: number } },
) => {
  if (Date.now() >= expires_at) {
    throw new Error('Access Token is invalid');
  }

  const data = await fetch(
    `https://api.spotify.com/v1/me/albums?offset=${pageParam.offset}&limit=${pageParam.limit}&locale=*`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );

  if (!data) {
    throw new Error();
  }

  return (await data.json()) as Albums;
};

const useAlbums = () => {
  const { data: session } = useSession();

  return useInfiniteQuery({
    queryKey: ['albums', session?.access_token!, session?.expires_at!],
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
};

export default useAlbums;
