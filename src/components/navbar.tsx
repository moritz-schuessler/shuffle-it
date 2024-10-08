import { SignOutButton } from '@/components/auth/auth-buttons';
import auth from '@/lib/auth/auth';
import Button from '@/components/ui/button';
import Link from 'next/link';

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
        {session && <SignOutButton>Sign out</SignOutButton>}
      </nav>
    </header>
  );
};

export default Navbar;
