import { Platform } from 'react-native';

// Para sobrescrever manualmente em produção, defina EXPO_PUBLIC_API_URL
// ex: EXPO_PUBLIC_API_URL=http://192.168.0.10:3000
function getBaseUrlForJsonServer() {
  const envUrl =
    (typeof process !== 'undefined' &&
      (process as any).env &&
      (process as any).env.EXPO_PUBLIC_API_URL) ||
    '';

  if (envUrl) return envUrl;

  // Web: usa o hostname atual (localhost/127.0.0.1 ou IP da máquina) com porta 3000
  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    return `http://${window.location.hostname}:3000`;
  }

  // Android emulador: 10.0.2.2 aponta para o host (sua máquina)
  if (Platform.OS === 'android') {
    return 'http://10.0.2.2:3000';
  }

  // iOS simulador / fallback
  return 'http://127.0.0.1:3000';
}

export const API_URL = getBaseUrlForJsonServer();

export async function getMotos() {
  const url = `${API_URL}/motos`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const text = await response.text().catch(() => '');
      throw new Error(`GET ${url} -> HTTP ${response.status}${text ? ` - ${text}` : ''}`);
    }
    return await response.json();
  } catch (error) {
    console.error('[API getMotos] baseURL:', API_URL, 'error:', error);
    throw new Error('Erro ao buscar motos');
  }
}
