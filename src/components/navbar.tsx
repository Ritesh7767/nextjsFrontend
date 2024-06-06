import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between p-4 sticky bg-blue-950 text-white font-bold text-lg'>
        <div>
            <h1>facebook</h1>
        </div>
        <ul className='list-none flex justify-around gap-x-7'>
            <Link href={'/home'}>Home</Link>
            <Link href={'/about'}>About us</Link>
            <Link href={'/contact'}>Contact us</Link>
            <Link href={'/sign'}>Sign In</Link>
            <Link href={'/login'}>Login In</Link>
        </ul>
    </nav>
  )
}

export default Navbar