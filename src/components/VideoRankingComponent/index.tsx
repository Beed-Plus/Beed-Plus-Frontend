import { FaArrowUpLong } from "react-icons/fa6";
import { Images } from "../../assets";

interface VRCInterface {
    position: string | number;
}

export default function VideoRankingComponent(props: VRCInterface){
    return(
        <div className="text-white flex gap-2 lg:gap-5 items-center justify-between w-[90vw] lg:w-[80vw]">
            <div className="text-[20px] lg:text-[64px] font-bold">{props.position}</div>
            <div className="flex gap-4 items-center justify-center border-b-[1px] py-2 lg:py-6 border-[#433E3E]">
                <img src={Images.rankingImg} alt="" className="w-[55px] h-[55px] lg:w-[128px] lg:h-[128px]" />
                <div className="w-[70vw]">
                    <div className="text-[15px] lg:text-[28px] line-clamp-2">
                        Lorem ipsum dolor sit amet consectetur. Habitant odio morbi accumsan non 
                    </div>
                    <p className="text-[12px] lg:text-[27px] text-[#747474]">
                        Sydney Talker
                    </p>
                </div>
                <FaArrowUpLong color="green" />
            </div>
        </div>
    )
}