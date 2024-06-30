import { w as writable } from "./index.js";
let _error = null;
let error = writable(_error);
let _loading = false;
let loading = writable(_loading);
let _isLoggin = false;
let isLoggin = writable(_isLoggin);
export {
  error as e,
  isLoggin as i,
  loading as l
};
