import Baselayout from "../../components/Baselayout";
import Header from "../../components/Header";
import VideoRankingComponent from "../../components/VideoRankingComponent";
import { MarketplaceSection } from "../../modules";



export default function Top100(){

    return(
        <Baselayout
            customTopComponent={
                <div className="bg-[#FFEBCB] inset-shadow-[-9px_-5px_15px_0_rgba(0,0,0,0.25)]">
                    <div className="lg:px-20 px-5 py-5 bg-[url(/scribble-bg.png)] bg-cover">
                        <Header logoType="dark" />
                        <div className="h-full relative flex justify-center items-center">
                            <div className="relative">
                                <div className="py-4">
                                    <p className="text-[64px] lg:text-[208px] font-bold">Top 100</p>
                                </div>
                                <div className="flex justify-end my-4">
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
                <VideoRankingComponent position={1} />
                <VideoRankingComponent position={2} />
                <VideoRankingComponent position={3} />
            </div>
            <MarketplaceSection />
        </Baselayout>
    )
}