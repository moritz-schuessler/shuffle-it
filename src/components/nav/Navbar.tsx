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
    <header className='flex justify-between py-[1rem]'>
      <h1>
        <Button>
          <Link
            className={`link ${pathname === '/' ? 'underline' : ''}`}
            href='/'
          >
            Shuffle-it
          </Link>
        </Button>
      </h1>
      <nav className='flex gap-[1rem]'>
        {status !== 'unauthenticated' && (
          <>
            <Button>
              <Link
                className={`link ${pathname === '/albums' ? 'underline' : ''}`}
                href={'/albums'}
              >
                Albums
              </Link>
            </Button>
            <Button style='solid'>
              <SignOutButton />
            </Button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
