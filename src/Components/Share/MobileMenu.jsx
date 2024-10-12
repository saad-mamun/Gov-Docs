import React from 'react'
import { Logo } from './Logo'
import { navItems } from '../../Lib/db'
export const MobileMenu=({toggleMenu})=> {
  return (
    <div className='lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-y-hidden'>
       <div className='flex justify-between items-center pb-6'>
          <Logo/>
          <button className='text-black text-2xl self-end' aria-label='Close-Menu' onClick={toggleMenu}>&times;</button>
       </div>
       <div className='space-y-4 '>
        {
            navItems.map(({link,label},i)=>
                <a href={link} key={i} className='block text-accent text-lg hover:text-primary transition-colors duration-150 cursor-pointer'>
                    {label}
                </a>
            )
        }
       </div>
    </div>
  )
}
