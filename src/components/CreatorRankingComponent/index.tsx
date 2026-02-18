import { FaArrowUpLong } from "react-icons/fa6";
import { Images } from "../../assets";

interface CRCInterface {
    position: string | number;
}

export default function CreatorRankingComponent(props: CRCInterface){
    return(
        <div className="text-white flex gap-8 items-center justify-between w-[90vw] lg:w-[80vw]">
            <div className="text-[20px] lg:text-[64px] font-bold">{props.position}</div>
            <div className="flex gap-4 items-center justify-center border-b-[1px] py-2 lg:py-6 border-[#433E3E]">
                <img src={Images.rankingImg} alt="" className="w-[55px] h-[55px] lg:w-[128px] lg:h-[128px] rounded-[55px] lg:rounded-[128px]" />
                <div className="w-[60vw]">
                    <p className="text-[15px] w-[85%] lg:text-[28px] line-clamp-2">
                        Sydney Talker
                    </p>
                    <p className="text-[12px] lg:text-[27px] text-[#747474]">
                        Sydney Talker
                    </p>
                </div>
                <FaArrowUpLong color="green" />
            </div>
        </div>
    )
}