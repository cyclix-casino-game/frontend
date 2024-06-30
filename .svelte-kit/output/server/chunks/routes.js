import { w as writable } from "./index.js";
let route = "";
let routes = writable(route);
let authToken = "";
let handleAuthToken = writable(authToken);
let _otp = "";
let otp = writable(_otp);
let _url = "";
let url = writable(_url);
export {
  handleAuthToken as h,
  otp as o,
  routes as r,
  url as u
};
