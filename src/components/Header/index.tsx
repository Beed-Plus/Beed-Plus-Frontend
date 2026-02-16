import { useState } from "react";
import { Images } from "../../assets";
import ActionButton from "../ActionButton";
import Nav from "./Nav";
import { Link } from "react-router";

interface HeaderInterface {
    logoType?: "dark" | "light"
}

export default function Header(props: HeaderInterface){
    let [isNavOpen, setIsNavOpen] = useState(false)

    return(
        <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
                <div onClick={()=>{setIsNavOpen(true)}} className="lg:hidden">
                    <img src={Images.hamburger} />
                </div>
                <Link to={"/"} className="w-[94px] lg:w-[170px]">
                    <img src={props.logoType == "dark" ? Images.logoBlack : Images.logoWhite} />
                </Link>
            </div>
            <Nav isNavOpen={isNavOpen} setNavOpen={setIsNavOpen} />
            <ActionButton 
                title="Login"
                link=""
            />
        </div>
    )
}