// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuTPsy4g5eIxUMZ3OVNai1fpeQHZWIBQ8",
    authDomain: "starwars-18dc9.firebaseapp.com",
    projectId: "starwars-18dc9",
    storageBucket: "starwars-18dc9.appspot.com",
    messagingSenderId: "1056873061232",
    appId: "1:1056873061232:web:24a00d75af32a481f54db5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);