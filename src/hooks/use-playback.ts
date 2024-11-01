import { useMutation, useQueryClient } from '@tanstack/react-query';

import { putPlayback } from '@/lib/spotify-api';
import { getSession } from 'next-auth/react';
import { toast } from 'sonner';

const usePlayback = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ device, uris }: { device: string; uris: string[] }) =>
      mutationFunction(device, uris),
    onSuccess: () => {
      toast.success('Played Queue');
      queryClient.resetQueries({ queryKey: ['queue'] });
    },
  });

  const playQueue = (formData: FormData) => {
    const queue = queryClient.getQueryData(['queue']) as Album[];
    const uris = queue
      .flatMap((album) => album?.tracks.items)
      .flatMap((tracks) => tracks?.uri);

    const device = formData.get('selected-device')!.toString();

    mutation.mutate({ device, uris });
  };

  return { isPending: mutation.isPending, playQueue };
};

const mutationFunction = async (device: string, uris: string[]) => {
  const session = await getSession();

  if (!session) {
    throw new Error('No Session');
  }

  if (Date.now() >= session.expires_at) {
    throw new Error('Access Token is invalid');
  }

  await putPlayback(session.access_token, uris, device);
};

export default usePlayback;
