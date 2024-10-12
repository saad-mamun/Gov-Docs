// 
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { cn } from '../../Lib/Utilizes';
 

export const Button = ({children, className}) => {
    return (
         <button className={cn('py-3 sm:py-4 px-3.5 text-xs md:text-base sm:px-[25px] text-white bg-gradient-primary font-bold rounded-full opacity-90 hover:opacity-100 transition-all delay-150', className
         )}>
            {children}
        </button> 
        
        
        )
}