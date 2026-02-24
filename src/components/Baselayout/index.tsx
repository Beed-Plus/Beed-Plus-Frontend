import { useEffect, useRef, type ReactNode } from "react"
import BgView from "../BgView";
import Header from "../Header";
import Footer from "../Footer";

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
            {
                props.customTopComponent
                ?
                <div>
                    {props.customTopComponent}
                </div>
                :
                <BgView
                    showBgImage={props.showBgImage}
                >
                    <Header logoType={props.logoType} theme={props.theme} />
                    {
                        props.topComponent
                    }
                </BgView>
            }
            <div className="lg:px-20 px-5 py-5">
                {props.children}
            </div>
            {
                props.customFooterComponent
                ?
                props.customTopComponent
                :
                <Footer />
            }
        </div>
    )
}