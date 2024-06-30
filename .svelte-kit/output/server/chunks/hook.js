import "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import "firebase/auth";
const firebaseConfiguration = () => {
  const firebaseConfi = {
    apiKey: "AIzaSyBnwi0tfL0WoOM3T_NpixieVeuL4nvi3Jc",
    authDomain: "cass-9a996.firebaseapp.com",
    projectId: "cass-9a996",
    storageBucket: "cass-9a996.appspot.com",
    messagingSenderId: "817978794599",
    appId: "1:817978794599:web:749511c7eb4ae670676ac2"
  };
  return firebaseConfi;
};
const firebaseConfig = firebaseConfiguration();
const app = initializeApp(firebaseConfig);
getFirestore(app);
