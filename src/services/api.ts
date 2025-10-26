// src/services/api.ts
import { Platform } from 'react-native';

function pickEnv(...keys: string[]) {
  const env: any = (typeof process !== 'undefined' && (process as any).env) || {};
  for (const k of keys) {
    const v = env?.[k];
    if (typeof v === 'string' && v.trim()) return v.trim();
  }
  return '';
}

function getBaseUrl() {
  // Prioridade: EXPO_PUBLIC_API_BASE (MockAPI) → EXPO_PUBLIC_API_URL (seu código antigo)
  const fromEnv = pickEnv('EXPO_PUBLIC_API_BASE', 'EXPO_PUBLIC_API_URL');
  if (fromEnv) return fromEnv.replace(/\/$/, '');

  // Fallback local (JSON Server) — só se quiser testar local
  if (Platform.OS === 'android') return 'http://10.0.2.2:3000';
  if (Platform.OS === 'ios') return 'http://127.0.0.1:3000';
  return 'http://localhost:3000';
}

export const API_URL = getBaseUrl();

// log visível no app para debug
// (pode remover depois que estiver ok)
console.log('🔗 [api] API_URL =', API_URL);

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

async function request<T>(
  path: string,
  opts: { method?: HttpMethod; body?: any; headers?: Record<string, string> } = {}
): Promise<T> {
  const url = `${API_URL}${path.startsWith('/') ? '' : '/'}${path}`;
  const headers: Record<string, string> = {
    Accept: 'application/json',
    ...(opts.body ? { 'Content-Type': 'application/json' } : {}),
    ...(opts.headers || {}),
  };

  // log básico
  // console.log('🌐 [api] fetch', opts.method || 'GET', url);

  const res = await fetch(url, {
    method: opts.method || 'GET',
    headers,
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status} em ${url}${text ? ` — ${text}` : ''}`);
  }

  try {
    return (await res.json()) as T;
  } catch {
    // alguns endpoints podem responder 204/empty
    return {} as T;
  }
}

export const api = {
  get: <T>(p: string) => request<T>(p),
  post: <T>(p: string, b?: any) => request<T>(p, { method: 'POST', body: b }),
  put:  <T>(p: string, b?: any) => request<T>(p, { method: 'PUT', body: b }),
  del:  <T>(p: string) => request<T>(p, { method: 'DELETE' }),
};
