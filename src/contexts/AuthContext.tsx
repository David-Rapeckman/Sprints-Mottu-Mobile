// src/contexts/AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextProps {
  user: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (email: string, password: string) => {
    // autenticação fake
    setUser(email);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
