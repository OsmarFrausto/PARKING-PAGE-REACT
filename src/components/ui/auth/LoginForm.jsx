'use client'
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function LoginForm() {
  const { login, isLoading, error, setError } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(credentials);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Iniciar Sesión</h2>

      {error && <p style={styles.error}>{error}</p>}

      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={credentials.email}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={credentials.password}
        onChange={handleChange}
        required
        style={styles.input}
      />

      <button type="submit" disabled={isLoading} style={styles.button}>
        {isLoading ? 'Cargando...' : 'Iniciar Sesión'}
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