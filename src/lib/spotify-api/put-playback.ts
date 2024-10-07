import { getSession } from 'next-auth/react';

const putPlayback = async (uris: string[], deviceId: string) => {
  const session = await getSession();

  if (!session) {
    throw new Error('No Session');
  }

  const response = await fetch(
    `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
      body: JSON.stringify({
        uris,
      }),
    },
  );

  if (!response.ok) {
    throw new Error();
  }

  return;
};

export default putPlayback;
