import { browser } from '$app/environment'
import { routes , handleAuthToken, otp} from "$lib/store/routes";
import { handleProfile } from "$lib/index";


/** @type {import('./$types').PageLoad} */

export async function load({ route }) {
  let password = browser && JSON.parse(sessionStorage.getItem('password'));
  let fach = browser && JSON.parse(sessionStorage.getItem('otp'));
  const user = browser && JSON.parse(localStorage.getItem('drr'))

  if(user){
      await handleProfile(user)
  }
 
  handleAuthToken.set(user)
  routes.set(route.id)
  otp.set(fach)
  return {password}
}