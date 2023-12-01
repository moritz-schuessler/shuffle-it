import { SignInButton } from '@/components/auth/buttons';
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/auth/authOptions';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Fragment } from 'react';

const SignIn = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  const providers = await getProviders();

  return (
    <>
      {Object.values(providers!).map((provider) => {
        return (
          <main
            key={provider.id}
            className='flex h-full items-center justify-center overflow-scroll'
          >
            <SignInButton provider={provider} />
          </main>
        );
      })}
    </>
  );
};

export default SignIn;
