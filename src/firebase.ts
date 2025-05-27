// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCobJ0KuJwXeZqe6RD2SESp4RBT8y740KQ",
  authDomain: "moviedb-bab97.firebaseapp.com",
  projectId: "moviedb-bab97",
  storageBucket: "moviedb-bab97.firebasestorage.app",
  messagingSenderId: "499039380519",
  appId: "1:499039380519:web:3ddd8e2d5c2afae37e1a02",
  measurementId: "G-Y5DR20GCZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();