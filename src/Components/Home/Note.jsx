import React from 'react'
import { Container } from '../Common/Container'

export const Note = () => {
    return(
        <section className='mt-[50px] sm:mt-20 lg:mt-[100px] xl:mt-[150px] px-2.5'>
        <Container className='flex flex-col md:flex-row gap-5 justify-between  items-center bg-gradient-primary rounded-[20px] py-10 md:py-14 pr-6 md:pr-16 pl-6 md:pl-10'>
        <div className='space-y-5 md:space-y-[30px]'>
            <h1 className='font-bold text-2xl md:text-[36px] lg:text-[46px]  leading-[36px] md:leading-[45px] lg:leading-[65px] font-space-grotesk text-white sm:max-w-[500px] lg:max-w-[566px]'>Ready to Simplify Your Document Management?</h1>

            <p className='font-bold sm:text-sm md:text-base  text-white leading-[22px] max-w-[566px] font-space-grotesk'>Sign up today and experience the power of AI-driven legal documentation.</p>
          </div>
          <button className='bg-white text-secondary min-w-fit px-[30px] py-[16px] rounded-[30px]'>Get Started Now</button>
       </Container>
      </section>
    )
}
