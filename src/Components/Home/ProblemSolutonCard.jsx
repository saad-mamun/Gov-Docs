import React from "react";

export const ProblemSolutionCard=({img,title,des1,des2})=>{
    return(
        <div className="w-[272px] h-[349px] rounded-[20px] p-5 space-y-5 shadow-card hover:bg-primary transition-colors duration-200 group">
        <div>
            <img className="size-[58px] bg-primary rounded-full" src={img} alt={title} />
        </div>
        <h1 className="font-space-grotesk font-bold text-lg text-secondary leading-none  group-hover:text-white">{title}
        </h1>
        <div className="text-LiteBlack space-y-2.5 font-space-grotesk group-hover:text-white">
        <p>{des1} </p>
       {des2 && <p>{des2}</p>}
        </div>
    </div>
    )
}