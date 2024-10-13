import React from "react";
import { SectionTitle } from "../Common/SectionTitle";

export const ProblemSolutionHeader=()=>{
    return(
        <div  className='flex justify-between items-center'>
            <SectionTitle gradient="Solution">
            Problem & 
            </SectionTitle>
            <div className="flex justify-center items-center gap-2.5 sm:gap-4">
                    <button className="bg-white size-8 sm:size-10 rounded-full shadow-xl flex items-center justify-center"> <img className="text-center" src="public/icon/feArrowUp2.png" alt="" />  
                    </button>
                    <button className="bg-primary size-8 sm:size-10 rounded-full shadow-xl flex items-center justify-center">
                        <img src="public/icon/feArrowUp1.png" alt="" />
                    </button>
                </div>
        </div>
    )
}