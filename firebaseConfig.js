import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTj3eKcSjAVU6tX5TK4hPVG629CEi0rPU",
  authDomain: "pair-project-bd5cd.firebaseapp.com",
  projectId: "pair-project-bd5cd",
  storageBucket: "pair-project-bd5cd.appspot.com",
  messagingSenderId: "594239186037",
  appId: "1:594239186037:web:21d2ccc57b40de9a70443c",
  measurementId: "G-7CEH6VQG8S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);