import { writable} from "svelte/store"

let _profile = null
export let user = writable(_profile)