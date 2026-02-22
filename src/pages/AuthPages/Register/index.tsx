import Baselayout from "../../../components/Baselayout";
import CustomTextInput from "../../../components/CustomTextInput";
import CustomButton from "../../../components/CustomButton";
import { useState } from "react";
import SignupStep from "../../../components/SignupStep";
import CustomDropDownInput from "../../../components/CustomDropDownInput";
import { useNavigate } from "react-router";

export default function Register(){
    let navigate = useNavigate()
    let [stage, setStage] = useState(1)
    return(
        <Baselayout
            theme="light"
            showBgImage={false}
            logoType="dark"
            customFooterComponent={
                <></>
            }
        >
            <div className="min-h-[80vh]">
                <div className="flex h-full justify-center items-center">
                    <div className="flex flex-col items-center">
                        <p className="text-[20px] lg:text-[32px] font-semibold text-center">Signup as a creator</p>
                        <p className="text-[#ADADAD] text-[16px] lg:text-[18px] text-center">Please enter your details to sign up as a creator on Beed+</p>
                        <div className="lg:w-[80%] py-4 my-4">
                            <p className="lg:text-[18px] text-center text-primary-orange">{}</p>
                            <div className="w-full flex justify-center">
                                <SignupStep 
                                    steps={[1, 2]}
                                    currentStep={stage}
                                />
                            </div>
                            {
                                stage == 1
                                ?
                                <div>
                                    <CustomTextInput 
                                        label="Name"
                                        placeholder="Enter your name"
                                        value=""
                                    />
                                    <CustomTextInput 
                                        label="Email Address"
                                        placeholder="Enter your email address"
                                        value=""
                                    />
                                    <CustomTextInput 
                                        label="Confirm Email Address"
                                        placeholder="Confirm your email address"
                                        value=""
                                    />
                                    {/* <Link to={"/auth/forgotpassword"} className="text-primary-orange underline">Forgot Password?</Link> */}
                                    <CustomButton 
                                        text="Next"
                                        onClick={()=>{
                                            setStage(2)
                                        }}
                                    />
                                </div>
                                :
                                <div>
                                    <CustomDropDownInput 
                                        label="Country"
                                        data={[{label: "Nigera", value: "NG"}]}
                                        value=""
                                        placeholder="Select Your Country"
                                    />
                                    <CustomDropDownInput 
                                        label="Category"
                                        placeholder="Enter your email address"
                                        value=""
                                        description="Select the category that fits into the kind of content you make"
                                    />
                                    <CustomTextInput 
                                        label="Enter Password"
                                        placeholder="Enter your password"
                                        value=""
                                    />
                                    <CustomTextInput 
                                        label="Confirm Password"
                                        placeholder="Confirm your password"
                                        value=""
                                    />
                                    {/* <Link to={"/auth/forgotpassword"} className="text-primary-orange underline">Forgot Password?</Link> */}
                                    <CustomButton 
                                        text="Sign Up"
                                        onClick={()=>{
                                            navigate("/dashboard")
                                        }}
                                    />
                                </div>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </Baselayout>
    )
}