'use client';
import { useAuth } from '../../../contexts/AuthContext';

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Bienvenido {user?.email}</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}