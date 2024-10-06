import { useMutation, useQueryClient } from '@tanstack/react-query';

import putPlayback from '@/lib/spotify/put-playback';

const usePlayback = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ device, uris }: { device: string; uris: string[] }) => {
      return putPlayback(uris, device);
    },
    onSuccess: () => {
      queryClient.resetQueries({ queryKey: ['queue'] });
    },
  });

  const playQueue = (formData: FormData) => {
    const queue = queryClient.getQueryData(['queue']) as Album[];
    const uris = queue
      .flatMap((album) => album?.tracks.items)
      .flatMap((tracks) => tracks?.uri);

    const device = formData.get('active-device')!.toString();

    mutation.mutate({ device, uris });
  };

  return { isPending: mutation.isPending, playQueue };
};

export default usePlayback;
