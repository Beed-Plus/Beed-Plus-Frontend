import Baselayout from "../../../components/Baselayout";
import BgView from "../../../components/BgView";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";
import Header from "../../../components/Header";
import Section from "../../../components/Section";

export default function ResetPassword(){
    return(
        <Baselayout>
            <div className="min-h-[100vh]">
                <BgView>
                    <Section>
                        <Header />
                        <div className="flex h-[100vh] justify-center items-center">
                            <div className="lg:w-[30vw] flex flex-col items-center bg-white p-4 rounded-[16px]">
                                <p className="text-[20px] lg:text-[32px] font-semibold text-center">Reset Password</p>
                            
                                <div className="py-4 my-4 w-full">
                                    <p className="lg:text-[18px] text-center text-primary-orange">{}</p>
                                    <CustomTextInput 
                                        label="Enter New Password"
                                        placeholder="Enter your new password"
                                        value=""
                                    />
                                    <CustomTextInput 
                                        label="Confirm Password"
                                        placeholder="Confirm your password"
                                        value=""
                                    />
                                
                                    <CustomButton 
                                        text="Reset Password"
                                        onClick={()=>{}}
                                    />
                                </div>
                            </div>
                        </div>
                    </Section>
                </BgView>
            </div>
        </Baselayout>
    )
}