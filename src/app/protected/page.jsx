"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export default function ProtectedPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/auth/login");
  }, [user, router]);

  if (!user) return null;

  return (
    <div>
      <h1>Zona Protegida</h1>
      <p>Bienvenido, {user.username}</p>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}
