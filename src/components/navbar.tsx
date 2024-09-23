import { SignOutButton } from '@/components/auth/auth-buttons';
import auth from '@/lib/auth/auth';
import Button from '@/components/ui/button';
import Link from 'next/link';
import Settings from '@/components/settings';

const Navbar = async () => {
  const session = await auth();

  return (
    <header className='flex items-center justify-between px-[var(--window-padding-x)] py-[var(--window-padding-y)] text-lg mobile:text-base'>
      <Button variant='ghost' asChild>
        <Link href={'/'}>
          <h1>Shuffle-it</h1>
        </Link>
      </Button>
      <nav className='flex gap-4'>
        <Settings />
        {session && <SignOutButton>Sign out</SignOutButton>}
      </nav>
    </header>
  );
};

export default Navbar;
