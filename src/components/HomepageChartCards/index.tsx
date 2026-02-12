import { Link } from "react-router";
import { Images } from "../../assets";

interface HPCCInterface {
    text: string;
    color: string;
    link: string;
}

export default function HomepageChartCards(props: HPCCInterface){
    return(
        <Link to={props.link} className="lg:col-span-2">
            <div className={`relative h-[232px] lg:h-[333px] rounded-[16px] my-4`} style={{backgroundColor: props.color}}>
                <div className="p-4 h-full bg-[url(/scribble-bg.png)] bg-bottom">
                    <div className="relative h-full">
                        <img src={Images.logoBlack} className="w-[40%] lg:w-[20%]" />
                        <p className="absolute bottom-0 right-0 lg:bottom-0 lg:right-0 text-[36px] lg:text-[72px] font-bold text-white text-right w-[65%]">{props.text}</p>
                    </div>
                    <img src={Images.chartCardImg} className="absolute rounded-[16px] bottom-0 left-0 w-[30%] lg:w-auto" />
                </div>
            </div>
        </Link>
    )
}