import axios from "axios"
import { serverUrl } from "$lib/backendUrl"
import { handleErrors, loading , isLoggin} from "$lib/store/activities"
import { user } from "$lib/store/profile";
import { browser } from '$app/environment'
import { handleAuthToken } from "$lib/store/routes";

const handleIsLogin = ((response)=>{
    handleAuthToken.set(response?.token)
    user.set(response?.user)
    isLoggin.set(true)
    browser && sessionStorage.setItem('user', JSON.stringify(response?.token));
    loading.set(false)
})

export const useSignupHook = (async(data)=> {
    loading.set(true)
    let response = ""
    await axios.post(`${serverUrl()}/auth/signup`,{
        auth: data
    })
    .then((res)=>{
        response = res.data
        handleIsLogin(response)
    })
    .catch((err)=> {
        handleErrors(err.response?.data)
    })
    return response
}) 

export const handleLoginUser = (async(data)=>{
    loading.set(true)
    let response = ""
    await axios.post(`${serverUrl()}/auth/login`,{
        auth: data
    })
    .then((res)=>{
        response = res.data
        handleIsLogin(response)
    })
    .catch((err)=> {
        handleErrors(err.response?.data)
    })
    return response
})