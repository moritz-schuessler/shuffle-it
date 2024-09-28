import {
  useMutation,
  useMutationState,
  useQueryClient,
} from '@tanstack/react-query';

import putPlayback from '@/lib/spotify/put-playback';

const usePlayback = () => {
  const queryClient = useQueryClient();

  const queue = useMutationState({
    filters: { mutationKey: ['queue'] },
    select: (mutation) => mutation.state.data as Album,
  });

  const mutation = useMutation({
    mutationFn: ({ uris }: { uris: string[] }) => {
      return putPlayback(uris);
    },
    onSuccess: () => {
      queryClient.getMutationCache().clear();
    },
  });

  const playQueue = (uris: string[] = []) => {
    if (uris.length === 0) {
      uris = queue
        .flatMap((album) => album?.tracks.items)
        .flatMap((tracks) => tracks?.uri);
    }

    mutation.mutate({ uris });
  };

  return { isPending: mutation.isPending, playQueue };
};

export default usePlayback;
