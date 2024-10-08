import { SignInButton } from '@/components/auth/auth-buttons';
import SpotifyIcon from '@/assets/icons/spotify-icon';
import Description from '@/app/(app)/@signin/description';

const SignIn = async () => {
  return (
    <>
      <aside className='flex h-full w-full flex-col justify-end gap-2 mobile:h-fit'>
        <Description />
      </aside>
      <main className='h-full w-full overflow-scroll'>
        <div className='flex h-full flex-col items-center justify-center gap-6 rounded-md bg-gray-200 mobile:bg-none'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <h2 className='text-xl'>Sign in with Spotify</h2>
            <p className='text-center text-gray-300'>
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
