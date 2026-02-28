import { useEffect, useState } from "react";
import Baselayout from "../../../components/Baselayout";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";
import SuccessComponent from "../../../components/SuccessComponent";
import { useNavigate } from "react-router";
import Header from "../../../components/Header";
import Section from "../../../components/Section";
import BgView from "../../../components/BgView";

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
        <Baselayout>
            <BgView>
                <Section>
                    <div className="min-h-[100vh]">
                        <Header />
                        {
                            success
                            ?
                            <div className="flex h-[80vh] justify-center items-center ">
                                <SuccessComponent />
                            </div>
                            :
                            <div className="flex h-[100vh] justify-center items-center">
                                <div className="flex flex-col items-center bg-white p-4 rounded-[16px]">
                                    <p className="text-[20px] lg:text-[24px] font-semibold text-center">Forgot Password</p>
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

                </Section>
            </BgView>
        </Baselayout>
    )
}