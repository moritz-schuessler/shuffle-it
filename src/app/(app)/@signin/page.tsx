import { SignInButton } from '@/components/auth/auth-buttons';
import SpotifyIcon from '@/assets/icons/spotify-icon';

const SignIn = async () => {
  return (
    <aside className='h-full w-full overflow-scroll px-[var(--window-padding-x)] py-[var(--window-padding-y)]'>
      <div className='flex h-full flex-col items-center justify-center gap-6 bg-gray-100 mobile:bg-none'>
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
    </aside>
  );
};

export default SignIn;
