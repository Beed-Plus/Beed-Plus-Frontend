import Baselayout from "../../../components/Baselayout";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";

export default function ResetPassword(){
    return(
        <Baselayout
            theme="light"
            showBgImage={false}
            logoType="dark"
            customFooterComponent={
                <></>
            }
        >
            <div className="h-[80vh]">
                <div className="flex h-full justify-center items-center">
                    <div className="lg:w-[30vw] flex flex-col items-center">
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
            </div>
        </Baselayout>
    )
}