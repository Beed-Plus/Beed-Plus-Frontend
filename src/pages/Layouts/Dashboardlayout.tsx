import { Outlet } from "react-router";

export default function Dashboardlayout(){
    return(
        <div>
            Dashboard layout
            <div>
                <Outlet />
            </div>
        </div>
    )
}