import axios from "axios"
import { serverUrl } from "$lib/backendUrl"
import { handleErrors, loading, isLoggin} from "$lib/store/activities";

export const handleUserProfile = (async()=>{
    await axios.get(`${serverUrl()}/auth/profile/1234556`)
})

export const handleProfile = (async(auth)=>{
    let response = ""
    loading.set(true)
    await axios.get(`${serverUrl()}/api/profile/user`,{
        headers:{
            Authorization: `Bearer ${auth}`
        }
    })
    .then((res)=>{
        response = res.data
        loading.set(false)
        isLoggin.set(true)
    })
    .catch((err)=>{
        handleErrors(err.response?.data)
        let error = err.response?.data
        if(error === "Request not authorized"){
            isLoggin.set(false)
        }
        isLoggin.set(false)
        loading.set(false)
    })
})