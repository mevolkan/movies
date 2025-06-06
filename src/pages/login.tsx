import { getFirebaseAuth, getProvider } from "@/lib/firebase"
import { signInWithPopup } from "firebase/auth";
import { useState, useEffect } from "react";
import { User } from 'firebase/auth';
import { Button } from "@/components/ui/button";


export default function Login() {
  const provider = getProvider();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = getFirebaseAuth().onAuthStateChanged((user) => {
      setUser(user);
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(getFirebaseAuth(), provider);
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
          <Button
            onClick={() => getFirebaseAuth().signOut()}
            className="bg-red-500 text-white p-3 rounded"
          >
            Sign Out
          </Button>
        </div>
      ) : (
        <Button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-3 rounded"
        >
          Sign in with Google
        </Button>
      )}
    </div>
  );
}