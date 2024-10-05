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

  const playQueue = () => {
    const queue = queryClient.getQueryData(['queue']) as Album[];
    const uris = queue
      .flatMap((album) => album?.tracks.items)
      .flatMap((tracks) => tracks?.uri);

    mutation.mutate({ uris });
  };

  return { isPending: mutation.isPending, playQueue };
};

export default usePlayback;
