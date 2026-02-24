import { useSearchParams } from "react-router";
import { Images } from "../../assets";
import CustomButton from "../../components/CustomButton";
import { APP_ID } from "../../constants";

export default function Dashboard(){
    //let navigate = useNavigate()
    let [searchParams] = useSearchParams()

    console.log("search params", searchParams, searchParams.get("code"))
    return(
        <div>
            <div>
                <div className="flex justify-center rounded-full items-center bg-[#FFD99D] w-[47px] h-[47px]">
                    <img src={Images.mockDpMale} className="w-full h-full rounded-full"/>
                </div>
                <div>
                    <div className="w-full h-full flex">
                        <CustomButton 
                            text="Connect instagram"
                            onClick={()=>{
                                window.location.replace(`https://www.instagram.com/oauth/authorize?force_reauth=true&client_id=${APP_ID}&redirect_uri=https://beedplus.com/dashboard&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish%2Cinstagram_business_manage_insights`)
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}