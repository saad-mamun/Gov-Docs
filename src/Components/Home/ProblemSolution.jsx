import React from "react";
import { Container } from "../Common/Container";
import { ProblemSolutionHeader } from "./ProblemSolutionHeader";
import { ProblemSolutionCard } from "./ProblemSolutonCard";
import { ProblemSolutions } from "../../Lib/db";
export const ProblemSolution=()=>{
    return(
        <section className="pt-32">
             <Container>
                <ProblemSolutionHeader/>
                <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-[30px]">
                    {ProblemSolutions.map((problem,i) => (
                        <ProblemSolutionCard 
                        // img={problem.img} 
                        // title={problem.title} 
                        // des1={problem.des1} 
                        // des2={problem.des2}

                        // Nicher niom ewo kora jai ....
                        
                        key={i} {...problem}/>
                    )
                )};
                </div>
             </Container>
        </section>
    )
};