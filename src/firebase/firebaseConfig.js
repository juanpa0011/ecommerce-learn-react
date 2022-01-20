import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: 'AIzaSyC3eOPaITAO3LuYrSL-6egfXeLztYMjna0', //process.env.REACT_APP_FIREBASE_APIKEY ,
  authDomain: "dnd-ecommerce.firebaseapp.com", //process.env.REACT_APP_FIREBASE_AUTHDOMAIN ,
  projectId: "dnd-ecommerce", //process.env.REACT_APP_FIREBASE_PROJECTID ,
  storageBucket: "dnd-ecommerce.appspot.com", // process.env.REACT_APP_FIREBASE_STORAGEBUCKET ,
  messagingSenderId: "132953957283", //process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID ,
  appId: "1:132953957283:web:ef4bf5a566e127f3e53016" //process.env.REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;