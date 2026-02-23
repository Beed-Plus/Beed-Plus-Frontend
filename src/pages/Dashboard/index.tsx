import { Images } from "../../assets";

export default function Dashboard(){
    return(
        <div>
            <div>
                <div className="flex justify-center rounded-full items-center bg-[#FFD99D] w-[47px] h-[47px]">
                    <img src={Images.mockDpMale} className="w-full h-full rounded-full"/>
                </div>
            </div>
        </div>
    )
}