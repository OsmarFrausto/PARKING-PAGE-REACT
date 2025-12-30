'use client'
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function RegisterForm() {
  const { register, isLoading, error, setError } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    await register(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Crear Cuenta</h2>

      {error && <p style={styles.error}>{error}</p>}

      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirmar contraseña"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <button type="submit" disabled={isLoading} style={styles.button}>
        {isLoading ? 'Cargando...' : 'Registrarse'}
      </button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  input: {
    padding: '10px',
    fontSize: '16px'
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    fontSize: '14px'
  }
};
