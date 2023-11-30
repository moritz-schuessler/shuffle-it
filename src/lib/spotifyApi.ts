import { QueryKey } from '@tanstack/query-core';

const getAlbum = async (access_token: string, offset: number) => {
  const response = await fetch(
    `https://api.spotify.com/v1/me/albums?offset=${offset}&limit=1&locale=*`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );
  const data: Albums = await response.json();
  return data;
};

const getAlbums = async ({
  queryKey,
  pageParam,
}: {
  queryKey: QueryKey;
  pageParam: string;
}) => {
  const [_key, access_token] = queryKey;

  const data = await fetch(pageParam, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return (await data.json()) as Albums;
};

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

export { getAlbum, getAlbums, putPlayback };
