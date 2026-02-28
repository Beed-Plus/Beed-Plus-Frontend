import { useEffect, useRef, type ReactNode } from "react"

interface BaselayoutInterface {
    children: ReactNode;
    theme?: "dark" | "light";
    logoType?: "dark" | "light";
    showBgImage?: boolean; 
    topComponent?: ReactNode;
    customTopComponent?: ReactNode;
    customFooterComponent?: ReactNode
}

export default function Baselayout(props: BaselayoutInterface){
    let layoutRef = useRef<HTMLDivElement | null>(null)

    useEffect(()=>{
        layoutRef.current?.scrollTo({top: 0})
    }, [])

    return(
        <div ref={layoutRef} className={`${props.theme == "light" ? "bg-[#FFFBFA]" : "bg-black"}`}>
            {props.children}
        </div>
    )
}