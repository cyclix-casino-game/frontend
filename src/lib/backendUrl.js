import { browser } from '$app/environment'
export const serverUrl = () => {
  if(browser){
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1"){
      return "http://localhost:8000";
    }else{
      return "https://backend-1-mbvq.onrender.com";
    }
  }
};