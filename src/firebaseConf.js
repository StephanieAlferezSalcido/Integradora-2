
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyBjzKWa___GsTVQ1XFCfwo9FEvC42-fb2c",
  authDomain: "react-firebase-auth-4aeee.firebaseapp.com",
  projectId: "react-firebase-auth-4aeee",
  storageBucket: "react-firebase-auth-4aeee.appspot.com",
  messagingSenderId: "1067022614713",
  appId: "1:1067022614713:web:ef0e3a9dd5786e3ab31b68"
};


const app = firebase.initializeApp(firebaseConfig);
export default app