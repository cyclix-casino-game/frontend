import axios from "axios";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { serverUrl } from "$lib/backendUrl";
import { handleErrors, loading , isLoggin} from "$lib/store/activities";
import { user } from "$lib/store/profile";
import { browser } from '$app/environment';
import { handleAuthToken, otp } from "$lib/store/routes";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfiguration } from "./firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = firebaseConfiguration()
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const handleIsLogin = ((response)=>{
    handleAuthToken.set(response?.token)
    user.set(response?.user)
    isLoggin.set(true)
    browser && localStorage.setItem("drr", JSON.stringify(response?.token));
    loading.set(false)
})

const handleGoogleAuthentication = (async(data)=>{
    let response = ""
    loading.set(true)
    await axios.post(`${serverUrl()}/auth/google`,{
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

export const handleGoogleAuth = (async()=>{
    let response = "";
    loading.set(true);
    const auth = getAuth(app);
    await signInWithPopup(auth, new GoogleAuthProvider())
        .then(async(res)=>{
          response = await handleGoogleAuthentication(res?.user)
            loading.set(false)
        })
        .catch((err)=>{
            handleErrors(err.code.slice(5))
            loading.set(false)
        })
        return response
    })

export const handleIsLogout = (()=>{
    browser && localStorage.removeItem("drr");
    loading.set(false)
    isLoggin.set(false)
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

export const handleKYCverification1 = (async(data, auth)=>{
    loading.set(true)
    let response = ""
    await axios.post(`${serverUrl()}/api/profile/kyc-step1`,{
        auth: data
    },{
        headers: {
            Authorization: `Bearer ${auth}`
        }
    })
    .then((res)=>{
        response = res.data
        user.set(response)
        loading.set(false)
    })
    .catch((err)=> {
        handleErrors(err.response?.data)
        loading.set(false)
    })
    return response
})

export const handleChangeUsername = (async(data, auth)=>{
    loading.set(true)
    let response = ""
    await axios.post(`${serverUrl()}/api/profile/username`,{
        username: data
    },{
        headers: {
            Authorization: `Bearer ${auth}`
        }
    })
    .then((res)=>{
        response = res.data
        user.set(response)
        loading.set(false)
    })
    .catch((err)=> {
        handleErrors(err.response?.data)
        loading.set(false)
    })
    return response
})

export const handleChangeProfilePrivacy = (async(data, auth)=>{
    loading.set(true)
    let response = ""
    await axios.post(`${serverUrl()}/api/profile/privacy`,{
        private: data
    },{
        headers: {
            Authorization: `Bearer ${auth}`
        }
    })
    .then((res)=>{
        response = res.data
        user.set(response)
        loading.set(false)
    })
    .catch((err)=> {
        handleErrors(err.response?.data)
        loading.set(false)
    })
    return response
})

export const handleLinkEmail = (async(data, auth)=>{
    loading.set(true)
    let response = ""
    await axios.post(`${serverUrl()}/api/profile/link-email`,{
        email: data
    },{
        headers: {
            Authorization: `Bearer ${auth}`
        }
    })
    .then((res)=>{
        response = res.data
        user.set(response)
        loading.set(false)
    })
    .catch((err)=> {
        handleErrors(err.response?.data)
        loading.set(false)
    })
    return response
})

export const handleCreateOtp = (async(auth)=>{
    loading.set(true)
    let response = ""
    await axios.get(`${serverUrl()}/api/profile/create-otp`,{
        headers: {
            Authorization: `Bearer ${auth}`
        }
    })
    .then((res)=>{
        response = res.data
        browser &&  sessionStorage.setItem('otp', JSON.stringify(response));
        otp.set(response)
        loading.set(false)
    })
    .catch((err)=> {
        handleErrors(err.response?.data)
        loading.set(false)
    })
    return response
})


export const handleVerifyEmail = (async(code, token, auth)=>{
    loading.set(true)
    let response = ""
    await axios.post(`${serverUrl()}/api/profile/verify-email`,{
        code, token
    },{
        headers: {
            Authorization: `Bearer ${auth}`
        }
    })
    .then((res)=>{
        response = res.data
        browser && sessionStorage.removeItem("otp");
        otp.set(null)
        user.set(response)
        loading.set(false)
    })
    .catch((err)=> {
        handleErrors(err.response?.data)
        loading.set(false)
    })
    return response
})


export const handleGoogleLink = (async(authi)=>{
    let response = "";
    loading.set(true);
    const auth = getAuth(app);
    await signInWithPopup(auth, new GoogleAuthProvider())
        .then(async(res)=>{
          response = await handleLinkEmail(res.user?.email, authi)
            loading.set(false)
        })
        .catch((err)=>{
            handleErrors(err.code.slice(5))
            loading.set(false)
        })
        return response
    })