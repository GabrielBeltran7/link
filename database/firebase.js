// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG_DDTybRJ-HL_4yxXYGqmfcPZ0knISls",
  authDomain: "link-6eb7d.firebaseapp.com",
  projectId: "link-6eb7d",
  storageBucket: "link-6eb7d.appspot.com",
  messagingSenderId: "295496781127",
  appId: "1:295496781127:web:356d9f41c888acd7cb1062"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app)

 export default db;
