import { NextAuthOptions } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { URLSearchParams } from 'url';
import SpotifyProvider from 'next-auth/providers/spotify';

const refreshAccessToken = async (token: JWT) => {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: process.env.SPOTIFY_ID!,
        client_secret: process.env.SPOTIFY_SECRET!,
        grant_type: 'refresh_token',
        refresh_token: token.refresh_token,
      }),
      method: 'POST',
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw Error(refreshedTokens);
    }

    token.access_token = refreshedTokens.access_token;
    token.refresh_token = refreshedTokens.refresh_token ?? token.refresh_token;
    token.expires_at = Date.now() + refreshedTokens.expires_in * 1000;
  } catch (error) {
    console.log(error);
    token.error = 'RefreshAccessTokenError';
  }

  return token;
};

export { refreshAccessToken };
