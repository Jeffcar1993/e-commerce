// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAER8tSFaPfShE7vIgFzcHHGEsOy_A7zuY",
  authDomain: "e-commerce-b6629.firebaseapp.com",
  projectId: "e-commerce-b6629",
  storageBucket: "e-commerce-b6629.firebasestorage.app",
  messagingSenderId: "490980040413",
  appId: "1:490980040413:web:564cf765232f5cfe990534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)