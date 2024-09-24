import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

const getTotalSavedAlbums = async (
  access_token: string,
  expires_at: number,
) => {
  if (Date.now() >= expires_at) {
    throw new Error('Access Token is invalid');
  }

  const data = await fetch(
    `https://api.spotify.com/v1/me/albums?offset=0&limit=1&locale=*`,
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

const useTotalSavedAlbums = () => {
  const { data: session } = useSession();

  const { data, status } = useQuery({
    queryKey: [
      'totalSavedAlbums',
      session?.access_token!,
      session?.expires_at!,
    ],
    queryFn: () =>
      getTotalSavedAlbums(session?.access_token!, session?.expires_at!),
    enabled: !!session?.access_token,
  });

  if (status === 'success') {
    return data.total;
  }
};

export default useTotalSavedAlbums;
