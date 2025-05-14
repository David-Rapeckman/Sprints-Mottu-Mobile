// src/types/auth.ts

export type UserRole = 'admin' | 'doctor' | 'patient';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  image: string;
  specialty?: string; // apenas para médicos
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
