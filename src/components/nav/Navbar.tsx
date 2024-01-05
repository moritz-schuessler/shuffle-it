import Link from 'next/link';
import { getServerSession } from 'next-auth';

import authOptions from '@/lib/auth/authOptions';
import Button from '@/components/Button';
import { SignOutButton } from '@/components/auth/buttons';

const Navbar = async () => {
  const session = await getServerSession(authOptions);

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
