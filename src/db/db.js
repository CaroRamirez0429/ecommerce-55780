import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWBkRs3-eBuTG-R-YI_DhXAxLPXQ7O9aA",
  authDomain: "ecommerce-55780.firebaseapp.com",
  projectId: "ecommerce-55780",
  storageBucket: "ecommerce-55780.appspot.com",
  messagingSenderId: "211886004478",
  appId: "1:211886004478:web:f27991280daa3c8900edaf",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
