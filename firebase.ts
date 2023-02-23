import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNw6tKsSMh2pxTKiX1W-HMRv2zEmxNKzI",
  authDomain: "chatgpt-clone-906b4.firebaseapp.com",
  projectId: "chatgpt-clone-906b4",
  storageBucket: "chatgpt-clone-906b4.appspot.com",
  messagingSenderId: "93248415920",
  appId: "1:93248415920:web:a03047f5f5bc1f7eb9b375"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };