import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Login error", err);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <button onClick={handleLogin} className="bg-blue-500 text-white p-3 rounded">
        Sign in with Google
      </button>
    </div>
  );
}
