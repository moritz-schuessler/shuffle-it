const getAlbums = async (
  access_token: string,
  offset: number,
  limit: number,
) => {
  const response = await fetch(
    `https://api.spotify.com/v1/me/albums?offset=${offset}&limit=${limit}&locale=*`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error();
  }

  return (await response.json()) as AlbumResponse;
};

export default getAlbums;
