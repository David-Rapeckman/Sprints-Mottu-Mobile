import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, LoginCredentials, AuthResponse } from '../types/auth';

const STORAGE_KEYS = {
  USER: '@SysTrack:user',
  USERS: '@SysTrack:users',
};

const defaultAdmin: User = {
  id: '1',
  name: 'Administrador',
  email: 'admin@gmail.com',
  password: 'admin123',
  birthdate: '1990-01-01',
  role: 'admin',
};

let users: User[] = [defaultAdmin];

export const authService = {
  async signIn(credentials: LoginCredentials): Promise<AuthResponse> {
    const storedUsers = await AsyncStorage.getItem(STORAGE_KEYS.USERS);
    users = storedUsers ? JSON.parse(storedUsers) : [defaultAdmin];

    const user = users.find(
      (u) => u.email === credentials.email && u.password === credentials.password
    );

    if (!user) throw new Error('Email ou senha inválidos.');

    await AsyncStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    return { user, token: `token-${user.id}` };
  },

  async getStoredUser(): Promise<User | null> {
    const userJson = await AsyncStorage.getItem(STORAGE_KEYS.USER);
    return userJson ? JSON.parse(userJson) : null;
  },

  async signOut(): Promise<void> {
    await AsyncStorage.removeItem(STORAGE_KEYS.USER);
  },

  async loadUsers(): Promise<void> {
    const stored = await AsyncStorage.getItem(STORAGE_KEYS.USERS);
    if (!stored) {
      await AsyncStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    }
  },
};
