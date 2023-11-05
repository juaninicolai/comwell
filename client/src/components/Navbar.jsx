
'use client'
import Link from "next/link"
import React from 'react'
function Navbar() {
  return (
      <nav className='bg-navColor-400 h-30 py-2 font-semibold px-3 flex justify-between'>
        <div className="logo"> <Link href={'/'}>
        <img src="Logo.png" alt="logo" />
        </Link>
        </div>
          
          
          <ul className='flex space-x-3'>
            <li > <Link className="hover:text-blue-300" href={'/Search'} >Search Hotels</Link> </li>
            <li > <Link href={'/'}>Offers and sale</Link> </li>
            <li > <Link href={'/'}>Party</Link> </li>
            </ul>
            <ul className="flex space-x-3">
            <li > <Link href={'/Location'}>Locations</Link> </li>
            <li > <Link href={'/Login'}>Profile</Link> </li>
            <li > <Link href={'/'}>Menu</Link> </li>

            </ul>
           
        
 

        
    </nav>
  )
}

export default Navbar