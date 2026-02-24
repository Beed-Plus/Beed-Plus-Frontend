import { useSearchParams } from "react-router";
import Baselayout from "../../components/Baselayout";
import Header from "../../components/Header";
import VideoRankingComponent from "../../components/VideoRankingComponent";

export default function Category(){
    let [searchParams] = useSearchParams()

    console.log("search params", searchParams)
    return(
        <Baselayout
            customTopComponent={
                <div className="bg-linear-to-b from-[#E38D01] to-[#BEB09B] inset-shadow-[-9px_-5px_15px_0_rgba(0,0,0,0.25)]">
                    <div className="lg:px-20 px-5 py-5 bg-[url(/carousel-card-bg.png)] bg-cover">
                        <Header logoType="dark" />
                        <div className="h-full relative flex justify-center items-center">
                            <div className="relative w-full">
                                <div className="py-4">
                                    <p className="text-[64px] text-center lg:text-[208px] text-white font-bold">Explore</p>
                                </div>
                                <div className="flex justify-between items-center my-4">
                                    <div className="lg:w-auto">
                                        <p className="text-[24px] lg:text-[48px] text-white font-semibold">Beauty/ Makeup</p>
                                    </div>
                                    <select className="border-[1px] p-2 rounded-[8px] bg-white">
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
        </Baselayout>
    )
}