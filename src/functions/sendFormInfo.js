import "../components/Form.js"
import "../functions/connectFirebase.js"
import { initializeApp, applicationDefault, cert } from "firebase/app";
import {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} from "firebase/firestore";
const db = getFirestore()


const sendForm = async (data) => {
    
    await db.collection('users-info').doc().add(data);
}

export {sendForm}