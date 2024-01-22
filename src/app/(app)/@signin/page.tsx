import { SignInButton } from '@/components/auth/auth-buttons';
import SpotifyIcon from '@/assets/icons/spotify-icon';

const SignIn = async () => {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-6 overflow-scroll xl:bg-neutral-900'>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h2 className='text-xl'>Sign in with Spotify</h2>
        <p className='text-center text-neutral-400'>
          To use this app, sign in with your Spotify account{' '}
        </p>
      </div>
      <SignInButton className='flex w-1/2 max-w-lg items-center justify-center gap-2'>
        <SpotifyIcon color='black' />
        Spotify
      </SignInButton>
    </div>
  );
};

export default SignIn;
