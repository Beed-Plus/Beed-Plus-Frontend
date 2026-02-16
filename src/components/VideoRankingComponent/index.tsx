import { Images } from "../../assets";

interface VRCInterface {
    position: string | number;
}

export default function VideoRankingComponent(props: VRCInterface){
    return(
        <div className="text-white flex gap-2  gap-5 items-center w-full lg:w-[80%]">
            <div className="text-[20px] lg:text-[64px] font-bold">{props.position}</div>
            <div className="flex gap-4 items-center justify-center border-b-[1px] py-2 lg:py-6 border-[#433E3E]">
                <img src={Images.rankingImg} alt="" className="w-[55px] h-[55px] lg:w-[128px] lg:h-[128px]" />
                <div className="w-[200px] md:w-[450px] xl:w-[700px]">
                    <div className="text-[15px] lg:text-[28px] truncate">
                        Lorem ipsum dolor sit amet consectetur. Habitant odio morbi accumsan non 
                    </div>
                    <p className="lg:text-[27px] text-[#747474]">
                        Sydney Talker
                    </p>
                </div>
            </div>
        </div>
    )
}