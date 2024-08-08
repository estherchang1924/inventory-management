// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe4ZrD1M3_oLlspc9h0u76_CUhKstb39M",
  authDomain: "inventory-management-b9e7f.firebaseapp.com",
  projectId: "inventory-management-b9e7f",
  storageBucket: "inventory-management-b9e7f.appspot.com",
  messagingSenderId: "435443793062",
  appId: "1:435443793062:web:384668a468d270bbde4867",
  measurementId: "G-TFBE823JHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}