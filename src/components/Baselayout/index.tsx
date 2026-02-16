import type { ReactNode } from "react"
import BgView from "../BgView";
import Header from "../Header";
import Footer from "../Footer";

interface BaselayoutInterface {
    children: ReactNode;
    theme?: "dark" | "light";
    showBgImage?: boolean; 
    topComponent?: ReactNode;
    customTopComponent?: ReactNode;
}

export default function Baselayout(props: BaselayoutInterface){
    return(
        <div className={`bg-black bg-position-[bottom_200px]`}>
            {
                props.customTopComponent
                ?
                props.customTopComponent
                :
                <BgView
                    showBgImage={props.showBgImage}
                >
                    <Header />
                    {
                        props.topComponent
                    }
                </BgView>
            }
            <div className="lg:px-20 px-5 py-5">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}