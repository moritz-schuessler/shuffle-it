import { useMutation, useQueryClient } from '@tanstack/react-query';

import putPlayback from '@/lib/spotify/put-playback';

const usePlayback = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ uris }: { uris: string[] }) => {
      return putPlayback(uris);
    },
    onSuccess: () => {
      queryClient.resetQueries({ queryKey: ['queue'] });
    },
  });

  const playQueue = (uris: string[] = []) => {
    if (uris.length === 0) {
      const queue = queryClient.getQueryData(['queue']) as Album[];

      uris = queue
        .flatMap((album) => album?.tracks.items)
        .flatMap((tracks) => tracks?.uri);
    }

    mutation.mutate({ uris });
  };

  return { isPending: mutation.isPending, playQueue };
};

export default usePlayback;
