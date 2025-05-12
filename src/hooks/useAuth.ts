import { useEffect, useState } from "react";
import { auth, onAuthStateChanged, signInWithPopup, provider, signOut, type User } from "@/lib/firebase";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  const signIn = () => signInWithPopup(auth, provider);
  const signOutUser = () => signOut(auth);

  return { user, signIn, signOut: signOutUser };
} 