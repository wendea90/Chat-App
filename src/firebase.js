
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCo_Wvu0GLW3fWynmfc5TirrHaEJqzWU20",
    authDomain: "chat-clone-2244d.firebaseapp.com",
    projectId: "chat-clone-2244d",
    storageBucket: "chat-clone-2244d.appspot.com",
    messagingSenderId: "140508927280",
    appId: "1:140508927280:web:0cd1f069d8e57529cbe4f5",
    measurementId: "G-NSF79NW3J0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

