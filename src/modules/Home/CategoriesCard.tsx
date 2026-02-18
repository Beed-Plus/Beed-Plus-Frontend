import { Link } from "react-router";
import { Images } from "../../assets";

interface CategoriesCardInterface {
    link: string
    title: string
}

export default function CategoriesCard(props: CategoriesCardInterface){
    return(
        <Link to={props.link}>
            <div className="relative h-[20vh] max-h-[150px] md:h-[50vh] md:max-h-[327px] 2xl:max-h-[750px] rounded-[16px] lg:rounded-[32px] bg-linear-to-b from-[#71FF6F] to-[#BEB09B] inset-shadow-[-4px_-7px_15px_0px_rgba(0,0,0,0.3)] z-10">
                <div className="bg-[url(/carousel-card-bg.png)] bg-no-repeat w-[100%] h-[100%] lg:p-8 p-2">
                    <p className="text-white xs:text-red-500 md:text-[48px] font-semibold">{props.title}</p>
                    <img src={Images.lifestyle} className="absolute w-[70%] lg:w-[70%] bottom-0 right-0 rounded-[16px] lg:rounded-[32px]"/>
                </div>
            </div>
        </Link>
    )
}