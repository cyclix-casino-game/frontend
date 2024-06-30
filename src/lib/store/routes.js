import { writable} from "svelte/store"

let route = ""
export let routes = writable(route)

let authToken = ''
export let handleAuthToken = writable(authToken)

let current_routeEl = ""
export let current_route = writable(current_routeEl)

let _otp = ""
export let otp = writable(_otp)

let _url = ""
export let url = writable(_url)