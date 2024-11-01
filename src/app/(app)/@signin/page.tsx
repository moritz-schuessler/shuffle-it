import { SignInButton } from '@/components/auth/auth-buttons';
import SpotifyIcon from '@/assets/icons/spotify-icon';
import Description from '@/app/(app)/@signin/description';

const SignIn = async () => {
  return (
    <>
      <aside className='flex h-full w-full flex-col justify-end gap-2'>
        <Description />
      </aside>
      <main className='h-full w-full overflow-scroll'>
        <div className='bg-background-200 flex h-full flex-col items-center justify-center gap-6 rounded-md'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <h2 className='text-xl'>Sign in with Spotify</h2>
            <p className='text-foreground-200 text-center'>
              To use this app, sign in with your Spotify account{' '}
            </p>
          </div>
          <SignInButton className='flex w-1/2 max-w-lg items-center justify-center gap-2'>
            <SpotifyIcon color='black' />
            Spotify
          </SignInButton>
        </div>
      </main>
    </>
  );
};

export default SignIn;
