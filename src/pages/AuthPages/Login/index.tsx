import { Link, useNavigate } from "react-router";
import Baselayout from "../../../components/Baselayout";
import CustomButton from "../../../components/CustomButton";
import CustomTextInput from "../../../components/CustomTextInput";
import useAuth from "../../../hooks/useAuth";
import { useState } from "react";
import Header from "../../../components/Header";
import Section from "../../../components/Section";
import BgView from "../../../components/BgView";

export default function Login(){
    const navigate = useNavigate()
    const { login } = useAuth()

    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    async function loginUser(){
        let res = await login({email, password})
        if(res?.success){
            navigate("/dashboard")
        }
    }
    return(
        <Baselayout>
        <BgView>
            <Section>
                <Header />
                <div className="min-h-[100vh]">
                    <div className="flex flex-col h-[100vh] justify-center items-center">
                        <div className="flex flex-col items-center bg-white p-4 mt-12 rounded-[16px]">
                            <p className="text-[20px] font-semibold text-center">Login to Creator's Portal</p>
                            <p className="text-[#ADADAD] text-[14px] text-center my-2">Welcome back! Please enter your details</p>
                            <div className="lg:w-[80%] my-2">
                                <p className="lg:text-[18px] text-center text-primary-orange">{}</p>
                                <CustomTextInput 
                                    label="Email Address"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e)=> {setEmail(e.target.value)}}
                                />
                                <CustomTextInput 
                                    label="Password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e)=>{setPassword(e.target.value)}}
                                />
                                <Link to={"/auth/forgotpassword"} className="text-primary-orange underline">Forgot Password?</Link>
                                <CustomButton 
                                    text="Login"
                                    onClick={loginUser}
                                />
                                <div>You don't have an account? <Link className="underline text-primary-orange" to={"/auth/register"}> Click here to Sign up</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </BgView>
        </Baselayout>
    )
}