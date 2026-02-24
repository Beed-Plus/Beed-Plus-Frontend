import axios from "axios";
import { APP_ID, APP_SECRET } from "../constants";

export async function getShortLivedToken(code: string){
    console.log("getting shortlived token..")
    let res = await axios.post(`https://api.instagram.com/oauth/access_token?client_id=${APP_ID}&client_secret=${APP_SECRET}&grant_type=authorization_code&redirect_uri=https://beedplus.com/dashboard&code=${code}`)
    console.log("response", res)
}