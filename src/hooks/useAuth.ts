import { useState } from "react"
import { postData } from "../api"
import { ENDPOINTS, STORAGE_KEYS } from "../constants"

export default function useAuth(){
    let [authToken, setAuthToken] = useState(null)
    let [isLoggedIn, setIsLoggedIn] = useState(false)
    let [authErrorMessage, setAuthErrorMessage] = useState("")
    let [authLoading, setAuthLoading] = useState(false)

    async function signup(body: any){
        setAuthLoading(true)
        let result =  await postData(ENDPOINTS.register, body)
        console.log("result from signup", result)
        if(result.error){
            setAuthLoading(false)
            setAuthErrorMessage(result.error.response.data.message)
            return
        }
    }

    async function login(body: any){
        setAuthLoading(true)
        let result = await postData(ENDPOINTS.login, body)

        console.log("result from login", result)
        if(result.error){
            setAuthLoading(false)
            setAuthErrorMessage(result.error.response.data.message)
            return
        }

        // setAuthLoading(false)
        // localStorage.setItem(STORAGE_KEYS.authStorage, result.response?.data.accessToken)
        return {success: true}
    }

    return {
        authToken,
        isLoggedIn,
        authLoading,
        authErrorMessage,
        login,
        signup
    }
}