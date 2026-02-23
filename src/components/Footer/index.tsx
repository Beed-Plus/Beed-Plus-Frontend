import { Link } from "react-router";
import { Images } from "../../assets";
import ActionButton from "../ActionButton";
import BgView from "../BgView";
import { FacebookIcon, InstagramLogo, TiktokLogo } from "../Icons";
import { TwitterLogo } from "../Icons/TwitterLogo";

export default function Footer(){
    return(
        <footer className="rounded-[50px] relative h-[352px] lg:h-[818px]">
            <div className="absolute  lg:w-auto bottom-0">
                <p className="text-white text-[12px] lg:text-[20px] px-4 lg:px-8 text-center"> &copy; BEED PLUS LIMITED. ALL RIGHTS RESERVED.</p>
                <img src={Images.bigLogo} className="w-full" />
            </div>
            <BgView>
                <div className="h-full pt-12">
                    <div className="flex justify-between items-start">
                        <div className="w-[70%] lg:w-auto">
                            <div className="flex w-[112px] lg:w-auto gap-5 lg:justify-between items-center mb-2 lg:mb-4">
                                <TwitterLogo />
                                <InstagramLogo />
                                <TiktokLogo />
                                <FacebookIcon />
                            </div>
                            <Link to={"/terms"} className="underline text-white text-[12px] lg:text-[20px]">Terms & Conditions</Link>
                            <br />
                            <Link to={"/privacy-policy"} className="underline text-white text-[12px] lg:text-[20px]">Privacy Policy</Link>
                        </div>
                        <div className="flex items-center justify-between lg:gap-5">
                            {/* <div  className="flex my-2 gap-2 text-white text-[12px] lg:text-[14px] md:text-[18px] border-[2px] border-primary-yellow px-4 lg:px-6 py-2 text-center items-center justify-center rounded-[25px] bg-neutral-500/10 backdrop-blur-sm hover:bg-neutral-500/20">
                                contact@beedplus.com
                            </div> */}
                            <ActionButton 
                                title="Contact us"
                                link=""
                                small
                            />
                        </div>
                    </div>
                </div>
            </BgView>
        </footer>
    )
}