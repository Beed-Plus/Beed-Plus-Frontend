import { useState } from "react";
import { Images } from "../../assets";
import ActionButton from "../ActionButton";
import Nav from "./Nav";
import { Link } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";

interface HeaderInterface {
    logoType?: "dark" | "light"
    theme?: "dark" | "light"
}

export default function Header(props: HeaderInterface){
    let [isNavOpen, setIsNavOpen] = useState(false)

    return(
        <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
                <div onClick={()=>{setIsNavOpen(true)}} className="lg:hidden">
                    <GiHamburgerMenu size={28} color={props.theme == "light" ? "black" : "white"} />
                </div>
                <Link to={"/"} className="w-[94px] lg:w-[170px]">
                    <img src={props.logoType == "dark" ? Images.logoBlack : Images.logoWhite} />
                </Link>
            </div>
            <Nav isNavOpen={isNavOpen} setNavOpen={setIsNavOpen} theme={props.theme || "dark"} />
            <ActionButton 
                title="Login"
                theme={props.theme}
                link="/auth/login"
            />
        </div>
    )
}