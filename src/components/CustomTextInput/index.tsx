import type { InputHTMLAttributes } from "react";


interface CTIInterface extends InputHTMLAttributes<HTMLInputElement>{
    label?: string;
    errormsg?: string;
    description?: string
}

export default function CustomTextInput(props: CTIInterface){
    return(
        <div className="my-2">
            <p className="font-medium text-[16px] py-2">{props.label}</p>
            <input 
                className="border-[1px] text-[14px] md:text-[16px] border-[#ADADAD] rounded-[8px] py-2 px-4 w-full"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            {props.description && <div>{props.description}</div>}
            {props.errormsg && <div className="text-[#F87A15] my-2">{props.errormsg}</div>}
        </div>
    )
}