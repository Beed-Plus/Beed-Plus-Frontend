import { IoCheckmark } from "react-icons/io5";

export default function SuccessComponent(){
    return(
        <div className="md:w-[40%] p-4">
            <div className="flex flex-col items-center justify-center bg-white p-4 rounded-[16px]">
                <div className="flex items-center justify-center w-[144px] h-[144px] border-[5px] border-green-600 rounded-full">
                    {/* <IoCheckmark color="green" size={100} className="hidden md:block"/> */}
                    <IoCheckmark color="green" size={100}/>
                </div>
                <p className="text-[16px] font-medium lg:w-[100vh] text-center py-4">Please check your email for password reset link.</p>
            </div>
        </div>
    )
}