'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

import Button from '@/components/Button';
import { SignOutButton } from '@/components/auth/buttons';

const Navbar = () => {
  const pathname = usePathname();
  const { status } = useSession();

  return (
    <header className='flex justify-between px-8 py-4'>
      <Button variant='ghost' asChild>
        <Link
          className={`link ${pathname === '/' ? 'underline' : ''}`}
          href='/'
        >
          <h1 className='flex'>Shuffle-it</h1>
        </Link>
      </Button>
      <nav className='flex gap-4'>
        {status !== 'unauthenticated' && (
          <>
            <SignOutButton />
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
