import { Images } from "../assets";
import ActionButton from "../components/ActionButton";
import Baselayout from "../components/Baselayout";
import HomepageChartCards from "../components/HomepageChartCards";

export default function Home(){


    return(
        <Baselayout
            topComponent={
                <div className="lg:flex pt-20 w-full justify-between">
                <div className="lg:w-[44%]">
                    <h1 className="lg:text-[48px] text-[32px] text-center lg:text-left text-white font-semibold">
                        Official Creators <br /> <span className="text-primary-yellow">Chart</span> and <span className="text-primary-yellow">Discovery</span>
                    </h1>
                    <p className="text-[20px] lg:text-[24px] text-center lg:text-left text-white my-6">
                        Discover the best creators. Track your growth across every platform. Get found by the brands that matter.
                    </p>
                    <div className="flex justify-center lg:w-[30%] w-full my-4">
                        <div>
                            <ActionButton 
                                title="Register"
                                link="/auth/register"
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex w-[50%] justify-center items-center">
                    <img src={Images.carouselImage} />
                </div>
            </div>
            }
        >
            <section className="md:py-12">
                <h1 className="text-white text-[32px] lg:text-[58px] font-bold text-center">Official Charts</h1>
                <div className="md:grid md:grid-cols-4 md:gap-4">
                    <HomepageChartCards 
                        text="Charts"
                        color="#FEA514"
                        link="/charts"
                    />
                    <HomepageChartCards 
                        text="Top Creators"
                        color="#3D783C"
                        link="/topcreators"
                    />
                    <div className="md:col-span-2 lg:col-start-2">
                        <HomepageChartCards 
                            text="Top Hits"
                            textColor="black"
                            color="#FFEBCB"
                            link="/tophits"
                        />
                    </div>
                    {/* <div className={`lg:col-span-2 lg:col-start-2 bg-[#FFEBCB] relative h-[232px] lg:h-[333px] rounded-[16px] my-4 lg:my-0`}>
                        <div className="p-4 h-full bg-[url(/carousel-card-bg.png)] bg-no-repeat">
                            <div className="relative h-full">
                                <img src={Images.logoBlack} className="w-[40%] lg:w-[20%]" />
                                <p className="absolute bottom-0 right-0 lg:right-0 text-[36px] lg:text-[72px] font-bold text-black text-right w-[65%]">Top Hits</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
           {/* <MarketplaceSection />
            <section>
                <div className="py-12">
                    <h1 className="text-[32px] lg:text-[56px] text-white text-center font-bold my-6">Top Campaigns</h1>
                    <div className="py-6 flex">
                       <CampaignCard />
                    </div>
                    <div className="flex w-full justify-center py-6">
                        <ActionButton 
                            title="View All"
                            link=""
                        />
                    </div>
                </div>
            </section> */}
        </Baselayout>
    )
}