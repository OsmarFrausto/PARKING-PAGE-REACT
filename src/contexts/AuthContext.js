import React, { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useLocalStorage('users', []); // usuarios persistentes
  const [currentUser, setCurrentUser] = useState(null); // usuario logueado
  const [error, setError] = useState('');

  const register = async ({ name, email, password }) => {
    setError('');
    const exists = users.find(u => u.email === email);
    if (exists) {
      setError('Usuario ya registrado');
      throw new Error('Usuario ya registrado');
    }
    const newUser = { name, email, password };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
    return true;
  };

  const login = async ({ email, password }) => {
    setError('');
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      setError('Credenciales incorrectas');
      throw new Error('Credenciales incorrectas');
    }
    setCurrentUser(user);
    return true;
  };

  const logout = () => setCurrentUser(null);

  return (
    <AuthContext.Provider value={{ users, currentUser, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
