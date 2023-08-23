import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAvSjgneW2QKnTI31KOLGbuEq-88wzDvXQ",
  authDomain: "uniqueblogs-a7a8a.firebaseapp.com",
  projectId: "uniqueblogs-a7a8a",
  storageBucket: "uniqueblogs-a7a8a.appspot.com",
  messagingSenderId: "283966814333",
  appId: "1:283966814333:web:c05c4f9f606384d66b5914",
  measurementId: "G-K712F1L12X"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();