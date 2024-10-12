import React from "react";
import { cn } from "../Lib/Utilizes";

export const Gradient = ({children,className}) => {
    return (
        <span className={cn("bg-gradient-to-b from-[#00D2FF] to-[#059DBE] bg-clip-text text-transparent", className)}>{children}</span>
    )
}