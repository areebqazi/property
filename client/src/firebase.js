// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-cfff1.firebaseapp.com",
  projectId: "realestate-cfff1",
  storageBucket: "realestate-cfff1.appspot.com",
  messagingSenderId: "369526945778",
  appId: "1:369526945778:web:5bf566acccccec3b349d6b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);