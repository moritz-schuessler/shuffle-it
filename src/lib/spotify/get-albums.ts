import { getSession } from 'next-auth/react';

const getAlbums = async (offset: number, limit: number) => {
  const session = await getSession();

  if (!session) {
    throw new Error('No Session');
  }

  if (Date.now() >= session.expires_at) {
    throw new Error('Access Token is invalid');
  }

  const response = await fetch(
    `https://api.spotify.com/v1/me/albums?offset=${offset}&limit=${limit}&locale=*`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error();
  }

  return (await response.json()) as Albums;
};

export default getAlbums;
