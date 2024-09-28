import {
  useMutation,
  useMutationState,
  useQueryClient,
} from '@tanstack/react-query';
import { getSession } from 'next-auth/react';

const putPlayback = async (uris: string[]) => {
  const session = await getSession();

  if (!session) {
    throw new Error('No Session');
  }

  const response = await fetch('https://api.spotify.com/v1/me/player/play', {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${session.access_token}`,
    },
    body: JSON.stringify({
      uris,
    }),
  });

  if (!response.ok) {
    throw new Error();
  }

  return;
};

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
