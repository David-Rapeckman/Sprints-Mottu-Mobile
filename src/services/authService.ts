import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../types/auth';

const STORAGE = {
  USERS: '@App:users',
  USER: '@App:user',
  TOKEN: '@App:token',
};

let registeredUsers: User[] = [];

const mockAdmin: User = {
  id: 'admin',
  name: 'Administrador',
  email: 'admin@example.com',
  role: 'admin',
  image: 'https://randomuser.me/api/portraits/men/3.jpg',
};

export const authService = {
  async loadRegisteredUsers(): Promise<void> {
    const users = await AsyncStorage.getItem(STORAGE.USERS);
    registeredUsers = users ? JSON.parse(users) : [];
  },

  async register(name: string, email: string): Promise<User> {
    if (email === mockAdmin.email || registeredUsers.some((u) => u.email === email)) {
      throw new Error('Email já cadastrado');
    }

    const newUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      role: 'user',
      image: 'https://randomuser.me/api/portraits/lego/1.jpg',
    };

    registeredUsers.push(newUser);
    await AsyncStorage.setItem(STORAGE.USERS, JSON.stringify(registeredUsers));
    return newUser;
  },

  async signIn(email: string, password: string): Promise<{ user: User; token: string }> {
    if (email === mockAdmin.email && password === '123456') {
      return { user: mockAdmin, token: 'admin-token' };
    }

    const user = registeredUsers.find((u) => u.email === email);
    if (!user || password !== '123456') throw new Error('Email ou senha inválidos');

    return { user, token: `token-${user.id}` };
  },

  async signOut(): Promise<void> {
    await AsyncStorage.removeItem(STORAGE.USER);
    await AsyncStorage.removeItem(STORAGE.TOKEN);
  },

  async getStoredUser(): Promise<User | null> {
    const json = await AsyncStorage.getItem(STORAGE.USER);
    return json ? JSON.parse(json) : null;
  },

  async getAllUsers(): Promise<User[]> {
    return [mockAdmin, ...registeredUsers];
  },
};
