import { useMutation, useQueryClient } from '@tanstack/react-query';

import getAlbums from '@/lib/spotify/get-albums';

const useQueue = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['queue'],
    mutationFn: async () => {
      const totalSavedAlbums = await queryClient.ensureQueryData({
        queryKey: ['total-saved-albums'],
        queryFn: async () => (await getAlbums(1, 1)).total,
      });

      const offset = Math.floor(Math.random() * totalSavedAlbums);
      const response = await getAlbums(offset, 1);

      if (totalSavedAlbums !== response.total) {
        queryClient.setQueryData(['total-saved-albums'], () => response.total);
      }

      return response.items[0].album;
    },
    gcTime: Infinity,
  });
};

export default useQueue;
