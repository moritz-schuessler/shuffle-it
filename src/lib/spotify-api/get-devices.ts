const getDevices = async (access_token: string) => {
  const response = await fetch(`https://api.spotify.com/v1/me/player/devices`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error();
  }

  return (await response.json()) as DevicesResponse;
};

export default getDevices;
