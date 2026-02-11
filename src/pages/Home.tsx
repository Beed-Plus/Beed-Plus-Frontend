import { Images } from "../assets";
import ActionButton from "../components/ActionButton";
import Baselayout from "../components/Baselayout";
import Header from "../components/Header";
import HomepageChartCards from "../components/HomepageChartCards";

export default function Home(){
    return(
        <Baselayout>
            <div className={`bg-[url(/hero-bg.jpg)] bg-cover bg-center`}>
                <div className={`bg-radial-[at_45%_80%] from-transparent to-black to-75%`}>
                    <Header />
                    <div className="md:flex pt-20 w-full justify-between">
                        <div className="md:w-[44%]">
                            <h1 className="md:text-[48px] text-[32px] text-center md:text-left text-white font-semibold">
                                Official Creators <span className="text-primary-yellow">Chart</span> and Brand <span className="text-primary-yellow">Campaign</span> Discovery
                            </h1>
                            <p className="text-[20px] md:text-[24px] text-center md:text-left text-white my-6">
                                Discover the best creators. Track your growth across every platform. Get found by the brands that matter.
                            </p>
                            <div className="flex justify-center md:w-[30%] w-full my-4">
                                <div>
                                    <ActionButton 
                                        title="Register"
                                        link=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex w-[50%] justify-center items-center">
                            <div className="relative w-[286px] h-[327px] rounded-[32px] bg-linear-to-b from-[#71FF6F] to-[#BEB09B] inset-shadow-[-4px_-7px_15px_0px] z-10">
                                <div className="bg-[url(/carousel-card-bg.png)] bg-no-repeat w-[100%] h-[100%] p-8">
                                    <p className="text-white text-[48px] font-semibold">Lifestyle</p>
                                    <img src={Images.lifestyle} className="absolute bottom-0 right-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <h1 className="text-white text-[32px] md:text-[58px] font-bold text-center">Official Charts</h1>
                <div>
                    <HomepageChartCards 
                        text="Charts"
                        color="#FEA514"
                    />
                    <HomepageChartCards 
                        text="Top Creators"
                        color="#3D783C"
                    />
                    <div className={`bg-[#FFEBCB] relative h-[232px] md:h-[333px] rounded-[16px] my-4`}>
                        <div className="p-4 h-full bg-[url(/carousel-card-bg.png)] bg-no-repeat">
                            <div className="relative h-full">
                                <img src={Images.logoBlack} className="w-[40%] md:w-[20%]" />
                                <p className="absolute bottom-0 right-5 md:right-0 text-[32px] md:text-[72px] font-bold text-black text-right w-[50%]">Creators</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Baselayout>
    )
}