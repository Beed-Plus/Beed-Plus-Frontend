import type { ReactNode } from "react"

interface BaselayoutInterface {
    children: ReactNode;
    theme?: "dark" | "light";
}

export default function Baselayout(props: BaselayoutInterface){
    return(
        <div className={`md:px-20 px-5 py-5 ${props.theme == "light" ? "bg-white": "bg-black"}`}>
            {props.children}
        </div>
    )
}