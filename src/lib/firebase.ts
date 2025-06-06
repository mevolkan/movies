import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, Auth } from "firebase/auth";

let appInstance: ReturnType<typeof initializeApp> | null = null;
let authInstance: Auth | null = null;
let providerInstance: GoogleAuthProvider | null = null;

export function getFirebaseApp() {
   if (appInstance) return appInstance;

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "moviedb-bab97.firebaseapp.com",
    projectId: "moviedb-bab97",
    storageBucket: "moviedb-bab97.firebasestorage.app",
    messagingSenderId: "499039380519",
    appId: "1:499039380519:web:3ddd8e2d5c2afae37e1a02",
    measurementId: "G-Y5DR20GCZ8"
  };

 if (!firebaseConfig.apiKey || !firebaseConfig.projectId || !firebaseConfig.appId) {
    throw new Error('Missing Firebase configuration');
  }

  appInstance = getApps().length ? getApp() : initializeApp(firebaseConfig);
  return appInstance;
}

export function getFirebaseAuth(): Auth {
  if (!authInstance) {
    const app = getFirebaseApp();
    authInstance = getAuth(app);
  }
  return authInstance;
}

export function getProvider(): GoogleAuthProvider {
  if (!providerInstance) {
    providerInstance = new GoogleAuthProvider();
  }
  return providerInstance;
}
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();