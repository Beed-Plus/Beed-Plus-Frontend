import { Link } from "react-router";
import { Images } from "../../assets";
import CategoriesCard from "../../modules/Home/CategoriesCard";
import { MarketplaceSection } from "../../modules";
import Baselayout from "../../components/Baselayout";

export default function Charts(){

    return(
        <Baselayout
            topComponent={
                <Link to={"/charts/top100"}>
                    <div className="py-4 lg:py-12">
                        <div className="relative h-[214px] md:h-auto lg:p-8 p-4 bg-[#FFEBCB] bg-[url(/scribble-bg.png)] bg-cover rounded-[24px] inset-shadow-[-9px_-5px_15px_0_rgba(0,0,0,0.25)]">
                            <div className="relative flex items-end h-full">
                                <div className="absolute top-0 right-0 w-[95px]">
                                    <img src={Images.logoBlack} />
                                </div>
                                <h1 className="lg:text-[192px] text-[64px] font-bold">Top 100</h1>
                            </div>
                        </div>
                    </div>
                </Link>
            }
        >
            <div className="lg:py-6">
                <div>
                    <h1 className="text-white text-[32px] lg:text-[56px] text-center font-bold my-4">Categories</h1>
                    <div className="grid grid-cols-3 xl:grid-cols-4 md:gap-5 gap-2">
                        {
                            Array(30).fill({title: "hello"}).map((_, i)=>(
                                <div key={i}>
                                    <CategoriesCard title="Lifestyle" link="/charts/categories/lifestyle" />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <MarketplaceSection />
        </Baselayout>
    )
}