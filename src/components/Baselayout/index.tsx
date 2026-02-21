import type { ReactNode } from "react"
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
    return(
        <div className={`${props.theme == "light" ? "bg-[#FFFBFA]" : "bg-black"} bg-position-[bottom_200px]`}>
            {
                props.customTopComponent
                ?
                props.customTopComponent
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