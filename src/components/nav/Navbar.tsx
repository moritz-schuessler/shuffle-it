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
      <h1>
        <Button variant='ghost' asChild>
          <Link
            className={`link ${pathname === '/' ? 'underline' : ''}`}
            href='/'
          >
            Shuffle-it
          </Link>
        </Button>
      </h1>
      <nav className='flex gap-4'>
        {status !== 'unauthenticated' && (
          <>
            <Button variant='ghost' asChild>
              <Link
                className={`link ${pathname === '/albums' ? 'underline' : ''}`}
                href={'/albums'}
              >
                Albums
              </Link>
            </Button>
            <SignOutButton />
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
