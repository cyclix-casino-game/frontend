import { writable} from "svelte/store"

let _error = null
export let error = writable(_error)

let _loading = false
export let loading = writable(_loading)

let _isLoggin = false
export let isLoggin = writable(_isLoggin)

export const handleErrors = ((err)=>{
    error.set(err)
    loading.set(false)
    setTimeout(()=>{
        error.set(null)
    },4000)
})