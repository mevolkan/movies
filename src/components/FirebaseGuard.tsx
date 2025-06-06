import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getFirebaseApp } from '@/lib/firebase';

export default function FirebaseGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    try {
      getFirebaseApp();
      setChecked(true);
    } catch (err) {
      console.error(err);
      router.replace('/setup');
    }
  }, [router]);

  if (!checked) return null; // Or a loading spinner
  return <>{children}</>;
}
