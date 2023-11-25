'use client'

import Link from "next/link";
import {usePathname} from 'next/navigation'
import {useSession} from "next-auth/react";

import {SignOutButton} from '@/components/auth/buttons';

const Navbar = () => {
    const pathname = usePathname()
    const {status} = useSession()
    
    return (
        <header className='flex justify-between p-[2rem]'>
            <h1>
                <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                    Shuffle-it
                </Link>
            </h1>
            <nav className='flex gap-[1rem]'>
                {
                    (status !== 'unauthenticated') && (
                        <>
                            <Link className={`link ${pathname === '/albums' ? 'underline' : ''}`} href={"/albums"}>
                                Albums
                            </Link>
                            <SignOutButton/>
                        </>
                    )
                }
            </nav>
        </header>
    )
}

export default Navbar