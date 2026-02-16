import { Images } from "../assets";
import ActionButton from "../components/ActionButton";

export function MarketplaceSection(){
    return(
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
    )
}