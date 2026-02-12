import { Images } from "../assets";
import ActionButton from "../components/ActionButton";
import Baselayout from "../components/Baselayout";
import Header from "../components/Header";
import HomepageChartCards from "../components/HomepageChartCards";
import { CampaignCard } from "../modules/Home";
import CategoriesCard from "../modules/Home/CategoriesCard";

export default function Home(){
    return(
        <Baselayout>
            <div className={`bg-[url(/hero-bg.jpg)] bg-cover bg-center`}>
                <div className={`bg-radial-[at_45%_80%] from-transparent to-black to-70%`}>
                    <Header />
                    <div className="lg:flex pt-20 w-full justify-between">
                        <div className="lg:w-[44%]">
                            <h1 className="lg:text-[48px] text-[32px] text-center lg:text-left text-white font-semibold">
                                Official Creators <span className="text-primary-yellow">Chart</span> and Brand <span className="text-primary-yellow">Campaign</span> Discovery
                            </h1>
                            <p className="text-[20px] lg:text-[24px] text-center lg:text-left text-white my-6">
                                Discover the best creators. Track your growth across every platform. Get found by the brands that matter.
                            </p>
                            <div className="flex justify-center lg:w-[30%] w-full my-4">
                                <div>
                                    <ActionButton 
                                        title="Register"
                                        link=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:flex w-[50%] justify-center items-center">
                            <CategoriesCard />
                        </div>
                    </div>
                </div>
            </div>
            <section className="py-12">
                <h1 className="text-white text-[32px] lg:text-[58px] font-bold text-center">Official Charts</h1>
                <div className="lg:grid lg:grid-cols-4 lg:gap-4">
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
                    <div className={`lg:col-span-2 lg:col-start-2 bg-[#FFEBCB] relative h-[232px] lg:h-[333px] rounded-[16px] my-4`}>
                        <div className="p-4 h-full bg-[url(/carousel-card-bg.png)] bg-no-repeat">
                            <div className="relative h-full">
                                <img src={Images.logoBlack} className="w-[40%] lg:w-[20%]" />
                                <p className="absolute bottom-0 right-0 lg:right-0 text-[32px] lg:text-[72px] font-bold text-black text-right w-[65%]">Creators</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[url(/hero-bg.jpg)] bg-cover bg-center">
                <div className={`bg-radial-[at_45%_80%] from-transparent to-black to-60% py-12`}>
                    <div className="flex gap-2 lg:gap-4 items-center justify-center mt-4">
                        <img src={Images.logoWhite} className="w-[120px] lg:w-[255px]" />
                        <h1 className="text-white text-[28px] lg:text-[56px] font-semibold lg:font-bold">Marketplace</h1>
                    </div>
                    <div className="my-12">
                        <h3 className="text-white text-[32px] lg:text-[48px] font-semibold text-center">
                            <span className="text-primary-yellow">Scale</span> Your Brand with Top Creators
                        </h3>
                        <p className="text-white text-[20px] lg:text-[24px] my-6 text-center">
                            We are your strategic marketing partner. We identify and connect your brand to top-performing creators for your influencer campaign.
                        </p>
                        <div className="flex w-full justify-center my-6">
                            <ActionButton 
                                title="Register"
                                link=""
                            />
                        </div>
                    </div>
                </div>
            </section>
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
            </section>
            <footer className="lg:p-12 bg-[#111111] rounded-[24px]">
                <div>
                    <div>
                        <div>
                            <img src={Images.logoWhite} />
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </footer>
        </Baselayout>
    )
}