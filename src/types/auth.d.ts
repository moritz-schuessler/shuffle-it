import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth/jwt' {
  interface JWT {
    access_token: string;
    refresh_token: string;
    expires_at: number;
  }

  interface JWT {
    error: 'RefreshAccessTokenError';
  }
}

declare module 'next-auth' {
  interface Session {
    user: {
      sub: string | undefined;
    };
    access_token: string;
    refresh_token: string;
    expires_at: number;
  }

  interface Session {
    error: 'RefreshAccessTokenError';
  }
}
