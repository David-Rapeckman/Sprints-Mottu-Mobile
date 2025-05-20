export type UserRole = 'admin' | 'user';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  image: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
