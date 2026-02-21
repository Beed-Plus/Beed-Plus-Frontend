import { IoCheckmark } from "react-icons/io5";

export default function SuccessComponent(){
    return(
        <div>
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center w-[144px] h-[144px] lg:w-[181px] lg:h-[181px] border-[5px] border-green-600 rounded-full">
                    <IoCheckmark color="green" size={200} className="hidden md:block"/>
                    <IoCheckmark color="green" size={100} className="md:hidden" />
                </div>
                <p className="text-[24px] lg:text-[32px] font-medium lg:w-[100vh] text-center py-4">Please check your email for password reset link.</p>
            </div>
        </div>
    )
}