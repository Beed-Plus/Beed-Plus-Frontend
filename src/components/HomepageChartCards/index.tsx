import { Images } from "../../assets";

interface HPCCInterface {
    text: string;
    color: string;
}

export default function HomepageChartCards(props: HPCCInterface){
    return(
        <div className={`bg-[${props.color}] relative h-[232px] md:h-[333px] rounded-[16px] my-4`}>
            <div className="p-4 h-full bg-[url(/scribble-bg.png)]">
                <div className="relative h-full">
                    <img src={Images.logoBlack} className="w-[40%] md:w-[20%]" />
                    <p className="absolute bottom-0 right-30 md:bottom-0 md:right-0 text-[36px] md:text-[72px] font-bold text-white text-right w-[0%] md:w-[50%]">{props.text}</p>
                </div>
                <img src={Images.chartCardImg} className="absolute rounded-[16px] bottom-0 left-0 w-[30%] md:w-auto" />
            </div>
        </div>
    )
}