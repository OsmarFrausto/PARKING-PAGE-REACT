'use client';
import { useAuth } from '../../contexts/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProtectedLayout({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push('/auth/login');
  }, [user]);

  if (!user) return <p>Cargando...</p>;

  return <>{children}</>;
}