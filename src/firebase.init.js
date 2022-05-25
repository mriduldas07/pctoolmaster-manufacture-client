// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgN1MGchVz0_4R20XwJko6R0l5de1vY1A",
    authDomain: "assignment-12-a9b3e.firebaseapp.com",
    projectId: "assignment-12-a9b3e",
    storageBucket: "assignment-12-a9b3e.appspot.com",
    messagingSenderId: "532742450208",
    appId: "1:532742450208:web:e03f46725a8c3975e26045"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;