import React from 'react'
import { cn } from '../../Lib/Utilizes'
function ReviewCard({name,image,type, active,onClick}) {
  return (
    <button  
    onClick={onClick}
    className={cn(
        "inline-flex justify-normal items-center border border-primary rounded-[20px] w-full lg:w-[400px] xl:w-[491px] py-[1px] px-5 gap-[13px]", active && "bg-gradient-primary")}>
    <img className="rounded-full" src={image} alt="Review" />
 
    <div className={cn(
        "font-semibold font-space-grotesk text-[#666666] grid justify-items-start", active && "text-white"
        )}>
        <h4>{name}</h4>
        <p >{type}</p>
    </div>
  </button>
  )
}

export default ReviewCard
