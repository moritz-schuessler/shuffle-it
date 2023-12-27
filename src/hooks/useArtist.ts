import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

const getArtist = async (
  access_token: string,
  expires_at: number,
  id: string,
) => {
  if (Date.now() >= expires_at) {
    throw new Error('Access Token is invalid');
  }

  const data = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!data) {
    throw new Error();
  }

  return (await data.json()) as Album;
};

const useArtist = (id: string) => {
  const { data: session } = useSession();

  return useQuery({
    queryKey: ['album', session?.access_token!, session?.expires_at!, id],
    queryFn: () => getArtist(session?.access_token!, session?.expires_at!, id),
    enabled: !!session?.access_token,
  });
};

export { useArtist };
