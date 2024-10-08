import { Account, NextAuthOptions, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import SpotifyProvider from 'next-auth/providers/spotify';
import { refreshAccessToken } from '@/lib/auth/refresh-access-token';

const scope: string = [
  'user-read-private',
  'user-read-email',
  'user-library-read',
  'user-modify-playback-state',
  'user-read-playback-state',
].join(' ');

const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_ID!,
      clientSecret: process.env.SPOTIFY_SECRET!,
      authorization: {
        params: {
          scope: scope,
        },
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async jwt({ token, account }: { token: JWT; account: Account | null }) {
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
    async session({ session, token }: { session: Session; token: JWT }) {
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
};

export default authOptions;
