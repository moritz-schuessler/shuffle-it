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

const getAlbums = async (
  access_token: string,
  expires_at: number,
  { pageParam }: { pageParam: { offset: number; limit: number } },
) => {
  if (Date.now() >= expires_at) {
    throw new Error('Access Token is invalid');
  }

  const data = await fetch(
    `https://api.spotify.com/v1/me/albums?offset=${pageParam.offset}&limit=${pageParam.limit}&locale=*`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );

  if (!data) {
    throw new Error();
  }

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
