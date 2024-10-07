import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

import Spotify from 'next-auth/providers/spotify';

const scope: string = [
  'user-read-private',
  'user-read-email',
  'user-library-read',
  'user-modify-playback-state',
  'user-read-playback-state',
].join(' ');

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Spotify({
      authorization: `https://accounts.spotify.com/authorize?scope=${scope}`,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.access_token = account.access_token!;
        token.refresh_token = account.refresh_token!;
        token.expires_at = account.expires_at! * 1000;
      }

      if (Date.now() >= token.expires_at!) {
        token = await refreshAccessToken(token);
      }

      return token;
    },
    async session({ session, token }) {
      session.user!.sub = token.sub;
      session.access_token = token.access_token;
      session.refresh_token = token.refresh_token;
      session.expires_at = token.expires_at;

      if (token.error) {
        session.error = token.error;
      }

      return session;
    },
  },
});

const refreshAccessToken = async (token: JWT) => {
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
    token.error = 'RefreshAccessTokenError';
  }

  token.access_token = refreshedTokens.access_token;
  token.refresh_token = refreshedTokens.refresh_token ?? token.refresh_token;
  token.expires_at = Date.now() + refreshedTokens.expires_in * 1000;

  return token;
};
