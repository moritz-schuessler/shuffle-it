import NextAuth, {NextAuthOptions} from 'next-auth'
import SpotifyProvider from "next-auth/providers/spotify"

const scope: string = [
    'user-read-private',
    'user-read-email',
].join(' ')

const authOptions: NextAuthOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_ID!,
            clientSecret: process.env.SPOTIFY_SECRET!,
            authorization: {
                params: {
                    scope: scope
                }
            },
        })
    ],
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}
export {authOptions}