import React, { createContext, useContext, useState, useCallback } from 'react';
import { login as loginRequest } from '../api/auth';

const AuthContext = createContext(null);
const STORAGE_KEY = 'rojo_admin_token';

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(STORAGE_KEY));

  const login = useCallback(async (email, password) => {
    const { token } = await loginRequest(email, password);
    localStorage.setItem(STORAGE_KEY, token);
    setToken(token);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setToken(null);
  }, []);

  const value = { token, isAuthenticated: !!token, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
