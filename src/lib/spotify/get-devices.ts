import { getSession } from 'next-auth/react';

const getDevices = async () => {
  const session = await getSession();

  if (!session) {
    throw new Error('No Session');
  }

  if (Date.now() >= session.expires_at) {
    throw new Error('Access Token is invalid');
  }

  const response = await fetch(`https://api.spotify.com/v1/me/player/devices`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${session.access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error();
  }

  const devicesResponse = (await response.json()) as DevicesResponse;

  return devicesResponse.devices;
};

export default getDevices;
