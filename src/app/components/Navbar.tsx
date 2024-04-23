import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link className='link' href="/">Home</Link>
        <Link className='link'  href="/monsters">Monsters</Link>
        <Link className='link'  href="/monsters/searchmonster">Search Monster</Link>
        <Link className='link'  href="/monsters/adminmonster">Admin Monster</Link>
    </div>
  )
}

export default Navbar
