import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKqBe9Fm3T9i3y5d8iMsduw36Ul9u_Vls",
  authDomain: "titi-37a43.firebaseapp.com",
  projectId: "titi-37a43",
  storageBucket: "titi-37a43.appspot.com",
  messagingSenderId: "972958438169",
  appId: "1:972958438169:web:ddae3346f7f39769d12b88"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;


