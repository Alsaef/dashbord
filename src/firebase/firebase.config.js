// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDvuaGIIeafpJLH1SS7Tj5Pdjo6GRVXnPg",
  authDomain: "dashbord-3af37.firebaseapp.com",
  projectId: "dashbord-3af37",
  storageBucket: "dashbord-3af37.appspot.com",
  messagingSenderId: "1032939757175",
  appId: "1:1032939757175:web:aaf195df74794c7cb97072"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);