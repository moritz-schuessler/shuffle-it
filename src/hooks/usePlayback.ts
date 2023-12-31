import { useMutation } from '@tanstack/react-query';

const putPlayback = (access_token: string, uri: string) => {
  return fetch('https://api.spotify.com/v1/me/player/play', {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({
      context_uri: uri,
    }),
  });
};

const usePlayback = () => {
  return useMutation({
    mutationFn: ({
      access_token,
      uri,
    }: {
      access_token: string;
      uri: string;
    }) => {
      return putPlayback(access_token, uri);
    },
  });
};

export default usePlayback;
