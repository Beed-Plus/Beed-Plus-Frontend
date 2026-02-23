import { Link, Outlet } from "react-router";
import { Images } from "../../assets";

export default function Dashboardlayout(){
    return(
        <div className="flex">
            <div className="hidden p-4 lg:flex flex-col lg:w-[20vw] min-h-[100vh] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]">
                <Link to={"/"} className="w-[40%]">
                    <img src={Images.logoBlack} />
                </Link>
                <div className="flex flex-col mt-20 justify-start ">
                    <DashNavItem 
                        title="Dashboard"
                        isActive={true}
                    />
                    <DashNavItem 
                        title="Analysis"
                        isActive={false}
                    />
                </div>
            </div>
            <div className="p-4">
                <Outlet />
            </div>
        </div>
    )
}

interface DNIInterface {
    title: string
    isActive: boolean;
}

function DashNavItem(props: DNIInterface){
    return(
        <div className={`my-4 p-2 text-center ${props.isActive ? "bg-[#FEEBDA] border-2 border-primary-orange rounded-[12px]" : ""}`}>
            {props.title}
        </div>
    )
}