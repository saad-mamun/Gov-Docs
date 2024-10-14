import React, { useState } from 'react'
import { Container } from '../Common/Container'
import { SectionTitle } from '../Common/SectionTitle';
import { faqs } from '../../Lib/db';
import {FaqCard} from "./Components/Home/FaqCard"


export const Faq = () =>{
  const [active, setActive]=useState(false)
  return (
    <section className='mt-[30px] sm:mt-20 lg:mt-[100px] xl:mt-[150px]'>
        <Container className="max-w-[982px]">
            <SectionTitle className='text-center' gradient='Asked Questions'>Frequently </SectionTitle>

            <div className='pt-10 space-y-5'>
              {
                faqs.map((faq, i) => (
                  <FaqCard key={i} {...faq} 
                  onClick={() => setActive(!active)} 
                  isActive={active}/>
                ))
              }
            </div>
        </Container>
    </section>
  )
}