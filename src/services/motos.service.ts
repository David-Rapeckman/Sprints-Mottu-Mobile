// src/services/motos.service.ts
import { api } from './api';

export interface MotoDTO {
  id?: string;
  modelo?: string;
  status?: string;
  user?: string;
  image?: string;
  iotStatus?: string;
  localizacao?: string;
  createdAt?: string;
}

const resource = '/motos';

export const motosService = {
  list: () => api.get<MotoDTO[]>(resource),
  getById: (id: string) => api.get<MotoDTO>(`${resource}/${id}`),
  create: (payload: MotoDTO) => api.post<MotoDTO>(resource, payload),
  update: (id: string, payload: Partial<MotoDTO>) => api.put<MotoDTO>(`${resource}/${id}`, payload),
  remove: (id: string) => api.del<void>(`${resource}/${id}`),
};
