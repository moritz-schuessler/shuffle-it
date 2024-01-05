import Link from 'next/link';

import Button from '@/components/Button';
import { SignOutButton } from '@/components/auth/buttons';
import auth from '@/lib/auth/auth';

const Navbar = async () => {
  const session = await auth();

  return (
    <header className='flex justify-between px-8 py-4'>
      <Button variant='ghost' asChild>
        <Link href='/'>
          <h1>Shuffle-it</h1>
        </Link>
      </Button>
      <nav className='flex gap-4'>
        {session && <SignOutButton>Sign out</SignOutButton>}
      </nav>
    </header>
  );
};

export default Navbar;
