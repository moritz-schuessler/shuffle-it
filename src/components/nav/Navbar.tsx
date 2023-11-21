'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link";


const Navbar = () => {
    const pathname = usePathname()
    
    return (
        <header className='flex justify-between p-[2rem]'>
            <h1>
                <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                    Shuffle-it
                </Link>
            </h1>
            <nav className='flex gap-[1rem]'>
                <Link className={`link ${pathname === '/albums' ? 'underline' : ''}`} href="/albums">
                    Albums
                </Link>
            </nav>
        </header>
    )
}

export default Navbar