import { Link } from "react-router";
import { DiagonalArrowUp } from "../Icons";

interface ABInterface {
    title: string;
    link: string
    small?: boolean
    theme?: "light" | "dark"
}

export default function ActionButton(props: ABInterface){
    return(
        <Link to={props.link} className={`flex ${props.theme == "light" ? "text-black" : "text-white"}  ${props.small ? "text-[12px] gap-1" : "gap-2 text-[14px] md:text-[18px]"} border-[2px] border-primary-yellow ${props.small ? "px-2" : "px-4 md:px-6"} py-2 text-center items-center justify-center rounded-[25px] bg-neutral-500/10 backdrop-blur-sm hover:bg-neutral-500/20`}>
            <div className="hidden md:flex">
                <DiagonalArrowUp scale={20} />
            </div>
            {props.title}
        </Link>
    )
}