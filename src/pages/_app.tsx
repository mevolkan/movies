import "@/styles/globals.css";
import type { AppProps } from "next/app";
import FirebaseGuard from '@/components/FirebaseGuard';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseGuard>
      <Component {...pageProps} />
    </FirebaseGuard>
  );
}
