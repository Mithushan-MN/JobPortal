// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYWKWrf8VXJIYWLssSdlwW1dpK6-cj1NM",
  authDomain: "jobportal-b51d4.firebaseapp.com",
  projectId: "jobportal-b51d4",
  storageBucket: "jobportal-b51d4.appspot.com",
  messagingSenderId: "1082097382012",
  appId: "1:1082097382012:web:7fa01d75b8521e81720ff9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export {app};
