// src/services/cloudinary.ts
const CLOUD = process.env.EXPO_PUBLIC_CLOUDINARY_CLOUD || '';
const PRESET = process.env.EXPO_PUBLIC_CLOUDINARY_PRESET || '';

type UploadResult =
  | { secure_url: string; public_id: string }
  | { error: { message: string } };

export async function uploadToCloudinary(uri: string): Promise<string> {
  if (!CLOUD || !PRESET) {
    throw new Error('Cloudinary não configurado. Verifique EXPO_PUBLIC_CLOUDINARY_CLOUD e PRESET.');
  }

  // Converte o arquivo local para blob
  const result = await fetch(uri);
  const blob = await result.blob();

  const form = new FormData();
  form.append('file', blob as any);
  form.append('upload_preset', PRESET);

  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD}/image/upload`, {
    method: 'POST',
    body: form as any,
  });

  const json = (await res.json()) as UploadResult;

  if ('error' in json) {
    throw new Error(json.error?.message || 'Falha no upload do Cloudinary');
  }

  return json.secure_url;
}
