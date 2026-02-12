import { Images } from "../../assets";

export function CampaignCard(){
    return(
         <div className="text-white">
            <div>
                <img src={Images.campaignMockBanner} className="w-full" />
            </div>
            <div>
                <div className="md:w-[420px]">
                    <div className="flex justify-between items-center my-4">
                        <p className="text-white text-[18px] md:text-[32px] font-semibold">₦2,000,000 <span className="md:text-[20px] text-white/50">per creator</span></p>
                        <div className="text-white bg-primary-yellow w-[88px] h-[32px] p-[5px] text-center rounded-[16px]">
                            View
                        </div>
                    </div>
                    <h4 className="md:text-[24px] text-center font-semibold my-2">One-minute Video for Instagram </h4>
                    <p className="text-center md:text-[18px] text-[#524B4B]">
                        Lorem ipsum dolor sit amet consectetur. Duis varius nisi leo felis placerat ultricies sit. Feugiat consequat mi ultricies nulla.
                    </p>
                </div>
            </div>
        </div>
    )
}