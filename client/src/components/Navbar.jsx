
'use client'
import React from 'react'
function Navbar() {
  return (
      <nav className='bg-navColor-400 h-30 py-2 font-semibold px-3 flex justify-between'>
        <div className="logo"> <a href="#!">
        <img src="Logo.png" alt="logo" />
        </a>
        </div>
          
          
          <ul className='flex space-x-3'>
            <li > <a href="#!">Overnight</a> </li>
            <li > <a href="#!">Meetings & conference</a> </li>
            <li > <a href="#!">Party</a> </li>
            </ul>
            <ul className="flex space-x-3">
            <li > <a href="#!">Locations</a> </li>
            <li > <a href="#!">Profile</a> </li>
            <li > <a href="#!">Menu</a> </li>

            </ul>
           
        
 

        
    </nav>
  )
}

export default Navbar