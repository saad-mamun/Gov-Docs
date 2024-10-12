import React from "react";
import { cn } from "../../Lib/Utilites";

export const Container = ({children,className}) => {
    return (
        <div className={cn("w-full max-w-screen-xl mx-auto px-2.5", className)}>
            {children}
        </div>
    )
}