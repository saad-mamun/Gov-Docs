import React, { useState } from 'react';
import {Logo} from './Logo';
import { Container } from '../Common/Container';
import { Button } from '../Common/Button';
import { navItems } from '../../Lib/db';
import { MobileMenu } from './MobileMenu';
export const Navbar =() => {
  const [isMenuOpen, setMenuOpen]=useState(false);
  const toggleMenu = () =>{
    setMenuOpen((pre)=> !pre);
  }
  return (
    <nav className='py-5'>
        <Container>
          <div className='flex justify-between items-center gap-2.5 px-2 sm:px-5 xl:px-[30px] py-2 sm:py-3 xl:py-5 bg-white rounded-full'>
            <Logo/>
            <div className='hidden lg:flex justify-center items-center gap-3 xl:gap-4 '>
              {navItems.map(({label,link},i)=>(
                <a href={link} key={i}>
                  <p className='text-LiteBlack text-sm xl:text-base hover:text-primary transition-colors duration-150 cursor-pointer'>{label}</p>
                </a>
              ))}
            </div>
            <div className='flex justify-center items-center gap-2.5'>
              <button onClick={toggleMenu} className='lg:hidden block text-accent'>
                <div className='space-y-1'>
                  <span className='block w-6 h-0.5 bg-black'/>
                  <span className='block w-6 h-0.5 bg-black'/>
                  <span className='block w-6 h-0.5 bg-black'/>
                </div>
              </button>
              <Button>Get Started Today</Button>
            </div>
          </div>
          {isMenuOpen && <MobileMenu toggleMenu={toggleMenu}/>}
        </Container>
    </nav>
  );
};


