import Link from 'next/link';

import { auth, signOut } from '@/auth';
import Button from '@/components/ui/button';

const Navbar = async () => {
  const session = await auth();

  return (
    <header className='flex items-center justify-between mobile:text-base'>
      <Button variant='ghost' asChild>
        <Link href={'/'}>
          <h1>Shuffle-it</h1>
        </Link>
      </Button>
      <nav className='flex gap-4'>
        {session && (
          <form
            className='flex flex-col gap-4'
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <Button type='submit'>Signout</Button>
          </form>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
