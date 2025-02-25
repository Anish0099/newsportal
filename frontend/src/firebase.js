// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "social-web-7bdfa.firebaseapp.com",
  projectId: "social-web-7bdfa",
  storageBucket: "social-web-7bdfa.appspot.com",
  messagingSenderId: "621200062150",
  appId: "1:621200062150:web:ac99b8728447e62311c9c7",
  measurementId: "G-B27B35FQ7S"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
