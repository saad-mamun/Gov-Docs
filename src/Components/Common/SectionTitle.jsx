import React from "react";
import { cn } from "../../Lib/Utilizes";
import { Gradient } from "../TextGradient";
export const SectionTitle =({children, className, gradient}) =>{
    return(
        <h1 className={cn("font-space-grotesk font-bold text-2xl md:text-[36px] lg:text-[46px]  md:leading-[45px] lg:leading-[58.7px]", className)}>
             {children} <Gradient>{gradient}</Gradient>
        </h1>
    )
}