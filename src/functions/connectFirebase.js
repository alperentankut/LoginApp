/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue } from "firebase-admin/firestore";
import serviceAccountKey from "../key/serviceAccountKey.json" assert {type : "json"}

try {
  initializeApp({
    credential: cert(serviceAccountKey),
  });
  console.log("connect");
} catch (error) {
  console.log(error);
}
