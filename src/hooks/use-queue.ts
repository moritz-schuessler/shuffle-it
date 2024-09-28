import { getSession } from 'next-auth/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const getAlbum = async (offset: number) => {
  const session = await getSession();

  if (!session) {
    throw new Error('No Session');
  }

  const response = await fetch(
    `https://api.spotify.com/v1/me/albums?offset=${offset}&limit=1&locale=*`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error();
  }

  return (await response.json()) as Albums;
};

const useQueue = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['queue'],
    mutationFn: async () => {
      const totalSavedAlbums = await queryClient.ensureQueryData({
        queryKey: ['total-saved-albums'],
        queryFn: async () => (await getAlbum(1)).total,
      });

      const offset = Math.floor(Math.random() * totalSavedAlbums);
      const response = await getAlbum(offset);

      if (totalSavedAlbums !== response.total) {
        queryClient.setQueryData(['total-saved-albums'], () => response.total);
      }

      return response.items[0].album;
    },
    gcTime: Infinity,
  });
};

export default useQueue;
