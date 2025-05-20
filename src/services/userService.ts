import { User } from '../types/auth';
import { authService } from './authService';

export const userService = {
  async getAll(): Promise<User[]> {
    return await authService.getAllUsers();
  },

  async getByEmail(email: string): Promise<User | undefined> {
    const users = await this.getAll();
    return users.find((u) => u.email === email);
  },
};
