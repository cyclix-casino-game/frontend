import { browser } from '$app/environment'


/** @type {import('./$types').PageLoad} */

export async function load({ route }) {
  let password = browser && JSON.parse(sessionStorage.getItem('password'));
  return {password}
}