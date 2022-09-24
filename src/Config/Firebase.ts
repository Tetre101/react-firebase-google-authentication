// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5-KJOiYNxTb-H5ogJ7i4wvZUaSoNYMcc",
  authDomain: "hackathon-307fd.firebaseapp.com",
  projectId: "hackathon-307fd",
  storageBucket: "hackathon-307fd.appspot.com",
  messagingSenderId: "807041146003",
  appId: "1:807041146003:web:fc4185a5ea3673da6dc166"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app);
export const Provider = new GoogleAuthProvider();
export const db = getFirestore(app);