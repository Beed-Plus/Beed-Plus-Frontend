import { Images } from "../../assets";
import Baselayout from "../../components/Baselayout";
import Header from "../../components/Header";
import { MarketplaceSection } from "../../modules";



export default function Top100(){

    return(
        <Baselayout
            customTopComponent={
                <div className="bg-[#FFEBCB]">
                    <div className="lg:px-20 px-5 py-5 bg-[url(/scribble-bg.png)]">
                        <Header logoType="dark" />
                        <div className="h-full relative flex justify-center items-center">
                            <div className="relative">
                                <div>
                                    <p className="lg:text-[208px] font-bold">Top 100</p>
                                </div>
                                <div className="flex justify-between my-4">
                                    <div>
                                        Makeup / Beauty
                                    </div>
                                    <select className="border-[1px] rounded-[8px]">
                                        <option>Select Country</option>
                                        <option> Nigeria </option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        >
            <div className="flex flex-col items-center">
                <div className="text-white flex gap-5 items-center lg:w-[80%]">
                    <div className="text-[64px] font-bold">1</div>
                    <div className="flex gap-4 items-center border-b-[1px] py-6 border-[#433E3E]">
                        <img src={Images.rankingImg} alt="" className="lg:w-[128px] lg:h-[128px]" />
                        <div>
                            <p className="lg:text-[28px]">
                                Lorem ipsum dolor sit amet consectetur. Habitant odio morbi accumsan non 
                            </p>
                            <p className="lg:text-[27px] text-[#747474]">
                                Sydney Talker
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <MarketplaceSection />
        </Baselayout>
    )
}