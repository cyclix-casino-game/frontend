import { browser } from '$app/environment'
import { routes , url, handleAuthToken} from "$lib/store/routes";


/** @type {import('./$types').PageLoad} */

export async function load({ route }) {
  let password = browser && JSON.parse(sessionStorage.getItem('password'));
  routes.set(route.id)
  return {password}
}