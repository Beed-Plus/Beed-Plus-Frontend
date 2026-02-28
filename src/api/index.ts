import axios from "axios";
import { baseUrl } from "../constants";

export async function postData(endpoint: string, body: any, authToken?: string){
    try{
        let res = await axios.post(`${baseUrl}${endpoint}`, body, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${authToken}`
            }
        })

        return {response: res}
    }catch(err: any){
        return {error: err}
    }
}