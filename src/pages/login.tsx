import { auth, provider } from "../lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { useState, useEffect } from "react";
import { User } from 'firebase/auth';


export default function Login() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Login error", err);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      {user ? (
        <div className="text-center">
          <p className="text-green-600 font-medium mb-2">
            Welcome, {user.displayName}!
          </p>
          <button
            onClick={() => auth.signOut()}
            className="bg-red-500 text-white p-3 rounded"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-3 rounded"
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
}