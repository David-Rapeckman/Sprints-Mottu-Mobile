import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authService } from '../services/authService';
import { User } from '../types/auth';

interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      await authService.loadRegisteredUsers();
      const storedUser = await authService.getStoredUser();
      if (storedUser) setUser(storedUser);
    };
    loadUser();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { user, token } = await authService.signIn({ email, password });
    await AsyncStorage.setItem('@MedicalApp:user', JSON.stringify(user));
    await AsyncStorage.setItem('@MedicalApp:token', token);
    setUser(user);
  };

  const signOut = async () => {
    await authService.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);