'use client';
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const { register, error } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    if (!acceptTerms) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }
    setLoading(true);
    try {
      await register({ name, email, password });
      alert('Registro exitoso');
      router.push('/login'); // redirige al login sin recargar
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h1>Register</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} required style={{ width: '100%', padding: '10px', marginBottom: '15px' }} />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', padding: '10px', marginBottom: '15px' }} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%', padding: '10px', marginBottom: '15px' }} />
        <input type="password" placeholder="Confirmar Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required style={{ width: '100%', padding: '10px', marginBottom: '15px' }} />
        <label style={{ display: 'block', marginBottom: '15px', textAlign: 'left' }}>
          <input type="checkbox" checked={acceptTerms} onChange={e => setAcceptTerms(e.target.checked)} style={{ marginRight: '5px' }} />
          Acepto términos y condiciones
        </label>
        <button type="submit" disabled={loading} style={{ padding: '10px 20px' }}>
          {loading ? 'Cargando...' : 'Registrar'}
        </button>
      </form>
    </div>
  );
}