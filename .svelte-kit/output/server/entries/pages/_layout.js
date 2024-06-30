import { B as BROWSER } from "../../chunks/prod-ssr.js";
import { r as routes, h as handleAuthToken, o as otp } from "../../chunks/routes.js";
import "../../chunks/hook.js";
const browser = BROWSER;
async function load({ route }) {
  let password = browser;
  let fach = browser;
  const user = browser;
  handleAuthToken.set(user);
  routes.set(route.id);
  otp.set(fach);
  return { password };
}
export {
  load
};
