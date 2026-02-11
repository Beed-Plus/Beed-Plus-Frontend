import { useState } from "react";
import { Images } from "../../assets";
import ActionButton from "../ActionButton";
import Nav from "./Nav";

export default function Header(){
    let [isNavOpen, setIsNavOpen] = useState(false)

    return(
        <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
                <div onClick={()=>{setIsNavOpen(true)}} className="md:hidden">
                    <img src={Images.hamburger} />
                </div>
                <div className="w-[94px] md:w-[170px]">
                    <img src={Images.logoWhite} />
                </div>
            </div>
            <Nav isNavOpen={isNavOpen} setNavOpen={setIsNavOpen} />
            <ActionButton 
                title="Login"
                link=""
            />
        </div>
    )
}