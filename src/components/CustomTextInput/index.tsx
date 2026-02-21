interface CTIInterface {
    label?: string;
    value: string;
    placeholder: string;
    errormsg?: string;
    description?: string
}

export default function CustomTextInput(props: CTIInterface){
    return(
        <div className="my-4">
            <p className="font-medium text-[16px] md:text-[18px] py-2">{props.label}</p>
            <input 
                className="border-[1px] text-[14px] md:text-[16px] border-[#ADADAD] rounded-[8px] p-4 w-full"
                placeholder={props.placeholder}
                value={props.value}
            />
            {props.description && <div>{props.description}</div>}
            {props.errormsg && <div className="text-[#F87A15] my-2">{props.errormsg}</div>}
        </div>
    )
}