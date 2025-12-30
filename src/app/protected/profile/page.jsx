'use client';
import { useAuth } from '../../../contexts/AuthContext';

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Perfil de {user?.email}</h1>
    </div>
  );
}
