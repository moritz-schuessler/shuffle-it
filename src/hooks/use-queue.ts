import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';

import { getAlbums } from '@/lib/spotify-api';
import { getSession } from 'next-auth/react';

const useQueue = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['queue'],
    mutationFn: () => queryFunction(queryClient),
    onSuccess: (data) => {
      queryClient.setQueryData(['queue'], (oldData: Album[]) => {
        if (!oldData) {
          return [data];
        }

        return [...oldData, data];
      });
    },
  });
};

const queryFunction = async (queryClient: QueryClient) => {
  const session = await getSession();

  if (!session) {
    throw new Error('No Session');
  }

  if (Date.now() >= session.expires_at) {
    throw new Error('Access Token is invalid');
  }

  const totalSavedAlbums = await queryClient.ensureQueryData({
    queryKey: ['total-saved-albums', session.access_token],
    queryFn: async () => (await getAlbums(session.access_token, 1, 1)).total,
  });

  const offset = Math.floor(Math.random() * totalSavedAlbums);

  const response = await getAlbums(session.access_token, offset, 1);

  if (totalSavedAlbums !== response.total) {
    queryClient.setQueryData(['total-saved-albums'], () => response.total);
  }

  return response.items[0].album;
};
export default useQueue;
