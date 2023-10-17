// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_XSAa2t8XHIM9TU4r944x7ivMS7zQNMo",
  authDomain: "sadma-9af54.firebaseapp.com",
  projectId: "sadma-9af54",
  storageBucket: "sadma-9af54.appspot.com",
  messagingSenderId: "403466487270",
  appId: "1:403466487270:web:e9198c802dbcae37030227",
  measurementId: "G-G6T7Z4XQPT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default function () {
  <> Nothing is here LOL </>;
}
