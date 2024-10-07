// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Config Firebase récupéré depuis Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDdQ2tuCTZsLBHQa4T5hzmB5_2Zybqy8Jc",
  authDomain: "sn2mobile.firebaseapp.com",
  projectId: "sn2mobile",
  storageBucket: "sn2mobile.appspot.com",
  messagingSenderId: "826792474894",
  appId: "1:826792474894:web:802032cda68ae9a8c6bf5f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
