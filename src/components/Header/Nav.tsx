import { NavLink } from "react-router";
import { CloseWhite } from "../Icons";

interface NavInterface {
    isNavOpen: boolean;
    setNavOpen: (val: boolean) => void;
    theme?: "light" | "dark";
}

export default function Nav(props: NavInterface){
    return(
        <>
            <div className={`hidden lg:flex h-[59px] justify-around rounded-[24px] items-center gap-5 px-4 py-2 bg-neutral-500/10 border-[1px] ${props.theme == "light" ? "text-black border-primary-yellow" : "text-white border-y-white/50 border-x-[#555]/30"}`}>
                <NavItem 
                    title="Home"
                    link="/"
                />
                <NavItem 
                    title="Charts"
                    link="/charts"
                />
                <NavItem 
                    title="Top Creators"
                    link="/topcreators"
                />
                <NavItem 
                    title="Top Hits"
                    link="/tophits"
                />
                
            </div>
            {/* mobile nav */}
            <div className={`lg:hidden ${!props.isNavOpen && "hidden"} pt-20 fixed w-[60%] top-0 left-0 bottom-0 bg-black/50 backdrop-blur-sm z-100 ${props.theme == "light" ? "text-black border-primary-yellow" : "text-white border-y-white/50 border-x-[#555]/30"} `}>
                <div onClick={()=>{props.setNavOpen(false)}} className="flex justify-end p-4">
                    <CloseWhite />
                </div>
                <div className="px-4">
                    <NavItem 
                        title="Home"
                        link="/"
                    />
                    <div className="p-2" />
                    <NavItem 
                        title="Charts"
                        link="/charts"
                    />
                    <div className="p-2" />
                    <NavItem 
                        title="Top Creators"
                        link="/topcreators"
                    />   
                    <NavItem 
                        title="Top Hits"
                        link="/tophits"
                    />             
                </div>
            </div>
        </>
    )
}

interface NavItemInterface {
    title: string;
    link: string;
}

function NavItem(props: NavItemInterface){
    
    return(
        <>
            <NavLink to={props.link} className={({isActive})=> `flex px-4 py-2 justify-center items-center text-[14px] xl:text-[16px] ${isActive && "bg-primary-yellow/15 backdrop-blur-[2px] inset-shadow-[1px_-1px_0px_0px_rgba(255,_255,_255,_0.5)]"} rounded-[20px] transition-all`}>
                {props.title}
            </NavLink>
            <div className="border-[1px] border-[#242323] mt-4 lg:border-none" />
        </>
    )
}