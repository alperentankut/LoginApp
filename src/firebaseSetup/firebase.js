
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBdw9w_AjKG9WKwb7hksZ1DdOYhsE-77Xw",
  authDomain: "react-project-b0ad7.firebaseapp.com",
  projectId: "react-project-b0ad7",
  storageBucket: "react-project-b0ad7.appspot.com",
  messagingSenderId: "1043264167945",
  appId: "1:1043264167945:web:6683c03b732a99e38dd8d8",
  measurementId: "G-XLVNMVZRD2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
