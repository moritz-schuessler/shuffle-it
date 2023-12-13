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

export { getAlbum };
