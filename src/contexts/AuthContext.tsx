import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { AuthContextType, User } from '../types/auth';

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    loadStoredUser();
    seedAdminUser();
  }, []);

  const seedAdminUser = async () => {
    const storedUsers = await AsyncStorage.getItem('@users');
    const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];

    const adminExists = users.some(u => u.email === 'admin@gmail.com');
    if (!adminExists) {
      const admin: User = {
        id: '1',
        name: 'Administrador',
        email: 'admin@gmail.com',
        password: 'admin123',
        birthdate: '1990-01-01',
        role: 'admin',
      };
      users.push(admin);
      await AsyncStorage.setItem('@users', JSON.stringify(users));
    }
  };

  const loadStoredUser = async () => {
    const storedUser = await AsyncStorage.getItem('@user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  };

  const signIn = async (email: string, password: string) => {
    const storedUsers = await AsyncStorage.getItem('@users');
    const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];

    const foundUser = users.find(u => u.email === email && u.password === password);
    if (!foundUser) throw new Error('Credenciais inválidas');

    await AsyncStorage.setItem('@user', JSON.stringify(foundUser));
    setUser(foundUser);
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('@user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
