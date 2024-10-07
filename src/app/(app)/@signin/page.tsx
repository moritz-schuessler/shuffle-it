import { signIn } from '@/auth';
import Description from '@/app/(app)/@signin/description';
import Button from '@/components/ui/button';
import SpotifyIcon from '@/assets/icons/spotify-icon';

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
          <form
            className='flex w-1/2 max-w-lg items-center justify-center'
            action={async () => {
              'use server';
              await signIn('spotify');
            }}
          >
            <Button
              type='submit'
              variant='secondary'
              className='flex w-full items-center justify-center gap-2'
            >
              <SpotifyIcon color='black' />
              Spotify
            </Button>
          </form>
        </div>
      </main>
    </>
  );
};

export default SignIn;
