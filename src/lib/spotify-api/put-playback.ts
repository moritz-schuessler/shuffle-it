const putPlayback = async (
  access_token: string,
  uris: string[],
  deviceId: string,
) => {
  const response = await fetch(
    `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        uris,
      }),
    },
  );

  if (!response.ok) {
    throw new Error();
  }
};

export default putPlayback;
