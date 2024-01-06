import { SignOutButton } from '@/components/auth/auth-buttons';
import auth from '@/lib/auth/auth';

const Navbar = async () => {
  const session = await auth();

  return (
    <header className='flex items-center justify-between px-8 py-4'>
      <h1>Shuffle-it</h1>
      <nav className='flex gap-4'>
        {session && <SignOutButton>Sign out</SignOutButton>}
      </nav>
    </header>
  );
};

export default Navbar;
