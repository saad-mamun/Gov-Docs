import React, { useState } from "react";
import { SectionTitle } from "../Common/SectionTitle";
import { Container } from "../Common/Container";
import ReviewCard from "./ReviewCard";
import { reviews } from "../../Lib/db";
import { cn } from "../../Lib/Utilizes";
export const Reviews=()=>{
    const [active, setActive] = useState(1);
    const activeReview = reviews[active]
    return(
    <section className="bg-[#F6F6F6] my-[50px] sm:my-20 lg:my-[100px] xl:my-[150px] py-10 lg:py-20">
        <Container>
            <SectionTitle className='text-center' gradient='Our Client'>
                Reviews From
             </SectionTitle>

            <div className="pt-3 md:pt-10 flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-20 xl:gap-[93px]">
              
                <div className="bg-[#D2DED8] w-5px rounded-[50px]">
                 <div className="space-y-[16px]">
                 {Array.from(Array(3).keys()).map((el) => (
                        <div className={cn("hidden md:block w-[5px] h-[92px] rounded-lg bg-transparent" ,
                         active === el && 'bg-gradient-primary')}/>
                    ))}
                 </div>
                </div>
                

               <div className="space-y-[5px] md:space-y-[15px] flex-grow">
                {
                    reviews.map((review,i)=>(
                        <ReviewCard 
                        key={i} 
                        active={(active === i)} 
                        onClick={() => setActive(i)}
                        {...review}/>
                    ))
                }
               </div>

               {/* Review details */}
               <div className="space-y-[15px] md:space-y-[30px]">
                  <h1 className="font-bold font-space-grotesk text-[30px]">{activeReview.review.title}</h1>
                  <div className="flex gap-1 md:gap-2.5 ">

                    {/* Review section */}
                    {/* Repetition Array */}
                    {Array.from(Array(activeReview.review.star).keys()).map((el) => (
                        <img key={el} src="public/icon/star.svg" alt=""/>
                    ))}
                  </div>
                  <p className="font-space-grotesk text-[#666666] leading-[21.82px] max-w-[500px]">{activeReview.review.details}</p>
               </div>
            </div>
        </Container>
    </section>
    )
}