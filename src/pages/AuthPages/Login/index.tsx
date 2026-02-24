import { Link, useNavigate } from "react-router";
import Baselayout from "../../../components/Baselayout";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";

export default function Login(){
    const navigate = useNavigate()
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
                    <div className="flex flex-col items-center">
                        <p className="text-[20px] lg:text-[32px] font-semibold text-center">Login to your Creator Dashboard</p>
                        <p className="text-[#ADADAD] text-[16px] lg:text-[18px] text-center">Welcome back! Please enter your details</p>
                        <div className="lg:w-[80%] py-4 my-4">
                            <p className="lg:text-[18px] text-center text-primary-orange">{}</p>
                            <CustomTextInput 
                                label="Email Address"
                                placeholder="Enter your email address"
                                value=""
                            />
                            <CustomTextInput 
                                label="Password"
                                placeholder="Enter your password"
                                value=""
                            />
                            <Link to={"/auth/forgotpassword"} className="text-primary-orange underline">Forgot Password?</Link>
                            <CustomButton 
                                text="Login"
                                onClick={()=>{
                                    navigate("/dashboard")
                                }}
                            />
                            <div>You don't have an account? <Link className="underline text-primary-orange" to={"/auth/register"}> Click here to Sign up</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </Baselayout>
    )
}