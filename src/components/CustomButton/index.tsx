interface CustomButtonProps {
    text: string;
    onClick: ()=>void;
}

export default function CustomButton(props: CustomButtonProps){
    return(
        <div onClick={props.onClick} className="text-center uppercase bg-[#F87A15] text-white py-2 rounded-[8px] my-4">
            {props.text}
        </div>
    )
}