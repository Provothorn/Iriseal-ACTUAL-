import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getAuth} from '@firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCl_fYSrfiTRTpfKqma_lBuZ3Pt_eAsAB8",
  authDomain: "iris-seal-db.firebaseapp.com",
  projectId: "iris-seal-db",
  storageBucket: "iris-seal-db.appspot.com",
  messagingSenderId: "189034629078",
  appId: "1:189034629078:web:c7775eb6777edc10634677",
  measurementId: "G-F3YRE6JTVD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)