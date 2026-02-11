import type { SVGProps } from "react";

export function DiagonalArrowUp(props: SVGProps<SVGAElement>){
    return(
        <svg width={props.scale ||"28"} height={props.scale || "28"} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="14" fill="#E38D01"/>
            <path d="M8.64017 18.6537L17.3022 9.99165H9.8776L9.81396 8.99463H19.0064V18.187L18.0093 18.1234V10.6988L9.34727 19.3608L8.64017 18.6537Z" fill="white"/>
        </svg>
    )
}