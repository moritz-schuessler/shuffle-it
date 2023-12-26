import { useQuery } from '@tanstack/react-query';

const getAlbumById = async (
  access_token: string,
  expires_at: number,
  id: string,
) => {
  if (Date.now() >= expires_at) {
    throw new Error('Access Token is invalid');
  }

  const data = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
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

const useAlbumById = (access_token: string, expires_at: number, id: string) => {
  return useQuery({
    queryKey: ['album', access_token, expires_at, id],
    queryFn: () => getAlbumById(access_token, expires_at, id),
    enabled: !!access_token,
  });
};

export { useAlbumById };
