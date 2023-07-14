// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
import {getAuth} from '@firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCJCiQ41lo6R-J4z08fAwRfhOoZrU8p-Ys",
  authDomain: "crud-learn-fad0e.firebaseapp.com",
  projectId: "crud-learn-fad0e",
  storageBucket: "crud-learn-fad0e.appspot.com",
  messagingSenderId: "214713174530",
  appId: "1:214713174530:web:eeaaa879bbc1437bc0b51b",
  measurementId: "G-GBH3JPY1YQ"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app)

