import React from 'react'

export const FaqCard = ({a,q,onclick,isActive}) => {
  return (
    <div className='shadow-faq rounded-[20px] px-[30px] py-5'>
    <button
     onClick={onclick}
    className='inline-flex justify-between items-center gap-5 w-full'>
      <h1 className='font-space-grotesk font-bold text-[26px] text-[#2D2D2D] leading-[36px]'>{q}</h1>

      <div>
        <img className='rotate-90' src="public/icon/feArrowUp2.png" alt="" />
      </div>
    </button>
    {isActive && <p className='pt-5 font-space-grotesk'>{a}</p>}
  </div>
  )
}
