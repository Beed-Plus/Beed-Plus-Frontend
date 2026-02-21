interface CDIInterface {
    label?: string;
    value: string;
    placeholder: string;
    errormsg?: string;
    description?: string;
    data?: any[];
}

export default function CustomDropDownInput(props: CDIInterface){
    return(
        <div className="my-4">
            <p className="font-medium text-[16px] md:text-[18px] py-2">{props.label}</p>
            <select 
                className="border-[1px] text-[14px] md:text-[16px] border-[#ADADAD] rounded-[8px] p-4 w-full"
                value={props.value}
            >
                <option> {props.placeholder} </option>
                {
                    props.data?.map((d,)=>(
                        <option value={d.value}>{d.label}</option>
                    ))
                }
            </select>
            {props.description && <div>{props.description}</div>}
            {props.errormsg && <div className="text-[#F87A15] my-2">{props.errormsg}</div>}
        </div>
    )
}