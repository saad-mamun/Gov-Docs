import React from 'react'
import { navItems } from '../../Lib/db'
import { Container } from '../Common/Container';
import { socialIcon } from '../../Lib/db';
export const Footer=()=> {
  return (
    <footer className='pt-5 lg:pt-24'>
      <Container>
        <div className='flex flex-col sm:flex-row justify-between items-center py-5'>
          <h1 className='font-space-grotesk text-xl sm:text-2xl xl:text-4xl lg:text-lg font-bold'>
            Ai GoverningDocs
          </h1>
          <div className='hidden lg:flex justify-center items-center gap-3 xl:gap-4'>
          {navItems.map(({label,link},i)=>(
                <a href={link}>
                  <p className='text-LiteBlack text-sm xl:text-base hover:text-primary transition-colors duration-150 cursor-pointer'>{label}</p>
                </a>
              ))}
          </div>
          <div className='flex justify-center items-center gap-3'>
            {
              socialIcon.map(({url,img})=>
                <a href={url} target='_blank'>
                  <img src={img} alt='Social Icon' className='size-[36px]'/>
                </a>
              )}
          </div>
        </div>
        <div className='footer-border-color border border-transparent mt-5 md:mt-[50px] lg:mt-[106px] py-4'>
            <p className=' text-lg text-center leading-[18px] text-[#111111] py-5 '>Ai GoverningDocs 2024. All Rights Reserved.</p>
          </div>
      </Container>
    </footer>
  );
};




