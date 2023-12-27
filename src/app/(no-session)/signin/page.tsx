import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';

import { SignInButton } from '@/components/auth/buttons';
import authOptions from '@/lib/auth/authOptions';

const SignIn = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  const providers = await getProviders();

  return (
    <main className='flex h-full items-center justify-center overflow-scroll'>
      <div className='flex w-1/2 max-w-[30rem] flex-col gap-6'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <h2 className='text-xl'>Sign in with Spotify</h2>
          <p className='text-neutral-400'>
            To use this app it&#39;s required to be signed in with Spotify
          </p>
        </div>
        {Object.values(providers!).map((provider) => {
          return <SignInButton key={provider.id} provider={provider} />;
        })}
      </div>
    </main>
  );
};

export default SignIn;
