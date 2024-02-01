// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "@firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8wU24x62169uBKBjqLotF2gpaWEg08Ms",
  authDomain: "watu-k.firebaseapp.com",
  projectId: "watu-k",
  storageBucket: "watu-k.appspot.com",
  messagingSenderId: "483057326458",
  appId: "1:483057326458:web:72fcea9c9999ed71c7dec3",
  measurementId: "G-7QWY34FQ96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
export const auth =getAuth()
export const db= getFirestore()