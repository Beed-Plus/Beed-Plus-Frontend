import { useEffect, useState } from "react";
import Baselayout from "../../../components/Baselayout";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";
import SuccessComponent from "../../../components/SuccessComponent";
import { useNavigate } from "react-router";

export default function ForgotPassword(){
    let navigate = useNavigate()
    let [success, setSuccess] = useState(false)

    useEffect(()=>{
        if(success){
            setTimeout(()=>{
                navigate("/auth/resetpassword")
            }, 2000)
        }
    }, [success])

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
                {
                    success
                    ?
                    <div className="flex h-full justify-center items-center">
                        <SuccessComponent />
                    </div>
                    :
                    <div className="flex h-full justify-center items-center">
                        <div className="flex flex-col items-center">
                            <p className="text-[20px] lg:text-[32px] font-semibold text-center">Forgot Password</p>
                            <div className="lg:w-[30vw] py-4 my-4">
                                <p className="lg:text-[18px] text-center text-primary-orange">{}</p>
                                <CustomTextInput 
                                    label="Email Address"
                                    placeholder="Enter your email address"
                                    value=""
                                />

                                <CustomButton 
                                    text="Submit"
                                    onClick={()=>{
                                        setSuccess(true)
                                    }}
                                />
                                
                            </div>
                        </div>
                    </div>
                }
            </div>
        </Baselayout>
    )
}