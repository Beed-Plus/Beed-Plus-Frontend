import Baselayout from "../components/Baselayout";
import CreatorRankingComponent from "../components/CreatorRankingComponent";
import Header from "../components/Header";
import BgView from "../components/BgView";
import Footer from "../components/Footer";

export default function Topcreators(){

    return(
        <Baselayout>
            <div style={{position: "sticky", top: 0}}>
                <BgView>
                    <div className="lg:px-20 px-5 py-5 bg-[#000]/60">
                        <Header />
                    </div>
                    <div>
                        <div className="bg-[#3D783C] rounded-t-[16px] lg:rounded-t-[0px] py-4 bg-[url(/scribble-bg.png)] bg-cover bg-center bg-no-repeat inset-shadow-[-9px_-5px_15px_0_rgba(0,0,0,0.25)]">
                            <p className="text-[40px] lg:text-[72px] text-center font-bold">Top Creators</p>
                        </div>
                        <div className="flex gap-5 justify-center items-center px-4 py-6 border-b-[1px] bg-[#000]/20 backdrop-blur-sm border-[#FFF]/20 rounded-[16px]">
                            <div className="bg-white w-full md:w-[319px] p-2 rounded-[8px]">
                                <select className="lg:px-4 w-full">
                                    <option>Beed+ Top 10</option>
                                </select>
                            </div>
                            <div className="bg-white w-full md:w-[319px] p-2 rounded-[8px]">
                                <select className="lg:px-4 w-full">
                                    <option>Nigeria</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </BgView>
            </div>
            <div className="flex items-start min-h-[50vh] justify-center">
                <CreatorRankingComponent position={1} />
            </div>
            {/* <section>
                <div className={`bg-radial-[at_45%_80%] from-transparent to-black to-60% py-12`}>
                    <div className="flex gap-2 lg:gap-4 items-center justify-center mt-4">
                        <img src={Images.logoWhite} className="w-[120px] lg:w-[255px]" />
                        <h1 className="text-white text-[24px] lg:text-[56px] font-semibold lg:font-bold">Brand DNA</h1>
                    </div>
                    <div className="my-12">
                        <h3 className="text-white text-[32px] lg:text-[48px] font-semibold text-center">
                            Who We Are
                        </h3>
                        <p className="text-white text-[20px] lg:text-[24px] my-6 text-center">
                            BEED+ is the definitive bridge between raw creator data and elite brand growth. We provide brands with a competitive edge they won't find anywhere else.
                        </p>
                        <div>
                            <div className="text-white">
                                <p className="lg:text-[24px] font-semibold my-2 text-center">Creator's marketplace</p>
                                <div className="text-[13px] lg:text-[24px] rounded-[16px] bg-[#E38D0199] py-6 px-4">
                                    We give brands direct portal to high-impact talents. Skip the endless search and instantly connect with a vetted network of creators who align with your brand's niche, values, and target audience.
                                </div>
                            </div>

                            <div className="text-white">
                                <p className="lg:text-[24px] font-semibold my-2 text-center">Creator's marketplace</p>
                                <div className="text-[13px] lg:text-[24px] rounded-[16px] bg-[#E38D0199] py-6 px-4">
                                    We give brands direct portal to high-impact talents. Skip the endless search and instantly connect with a vetted network of creators who align with your brand's niche, values, and target audience.
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full justify-center my-6">
                            <ActionButton 
                                title="Register"
                                link=""
                            />
                        </div>
                    </div>
                </div>
            </section> */}
            <Footer />
        </Baselayout>
    )
}