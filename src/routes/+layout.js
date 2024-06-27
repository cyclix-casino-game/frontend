import { browser } from '$app/environment'
import { routes , url, handleAuthToken} from "$lib/store/routes";
import { handleProfile } from "$lib/index";

/** @type {import('./$types').PageLoad} */

export async function load({ route }) {
  let password = browser && JSON.parse(sessionStorage.getItem('password'));
  let user = browser && JSON.parse(sessionStorage.getItem('user'));
  if(user){
      await handleProfile(user)
  }
  routes.set(route.id)
  return {password}
}