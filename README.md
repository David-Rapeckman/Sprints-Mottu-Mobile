
# SysTrack — Guia de Execução (Expo, MockAPI e JSON Server)

> App mobile (Expo/React Native) para **mapeamento e monitoramento** de motos (POC). Este guia mostra como rodar tudo **com MockAPI (nuvem)** e, opcionalmente, **com JSON Server (local)**. Também inclui credenciais padrão e dicas de solução de problemas.

** Hash do commit final - 0f3dbe93081499476cf74f0cc220730be0654f7e **
---


## 📌 Escopo do Aplicativo

**Objetivos principais**:
- 📍 Visualizar motos por pátio/filial e consultar status.
- 🔐 Autenticação e sessão persistente (usuários internos).
- 👤 Gestão básica de perfis e configurações.
- 💾 Armazenamento local para preferências e cache (AsyncStorage).
- 🧩 Arquitetura escalável e organizada para evolução (POC funcional).

---

## 👥 Integrantes (Nome completo e RM)

- **Gustavo Rangel** — **RM 559168**  
  💼 Estudante de Análise e Desenvolvimento de Sistemas na FIAP  
  🔗 <https://linkedin.com/in/gustavoorangel>

- **David Rapeckman** — **RM 556607**  
  💼 Estudante de Análise e Desenvolvimento de Sistemas na FIAP  
  🔗 <https://linkedin.com/in/davidrapeckman>

- **Luis Felippe Morais** — **RM 558127**  
  💼 Estudante de Análise e Desenvolvimento de Sistemas na FIAP  
  🔗 <https://linkedin.com/in/luis-felippe-morais-das-neves-16219b2b9>

**Curso:** FIAP – Análise e Desenvolvimento de Sistemas  
**Disciplina/Entrega:** *Mobile Development*

---

## ✅ Credenciais padrão
- **E-mail:** `admin@gmail.com`
- **Senha:** `admin123`

> O usuário admin é semeado no primeiro load via AsyncStorage (`seedAdminUser`).

---

## 1) Requisitos
- Node.js 18+ (LTS)
- npm 9+ (ou yarn)
- **Expo Go** no celular (Android/iOS) *ou* emulador (Android Studio / Xcode)
- (Opcional) **JSON Server** para API local

---

## 2) Instalação do projeto
```bash
# Clonar e instalar
git clone <seu-repo>
cd <pasta-do-projeto>
npm install

# Sempre que mudar o .env, limpe o cache
npx expo start -c
```
Atalhos do Dev Server: `a` (Android) • `i` (iOS) • `w` (web).

---

## 3) Variáveis de ambiente (`.env`)
Crie um arquivo **`.env`** na raiz e escolha **UMA** das opções abaixo.

### Opção A — MockAPI **com Base Path correto** (recomendado)
No painel do MockAPI (⚙️ **Settings** do projeto), deixe **Base path** = **`/api/v1`** (sem `/motos`).  
Depois, use este `.env`:

```env
EXPO_PUBLIC_API_BASE=https://68d042fcec1a5ff33826e3bd.mockapi.io/api/v1
EXPO_PUBLIC_CLOUDINARY_CLOUD=dawxgqnfj
EXPO_PUBLIC_CLOUDINARY_PRESET=perfil_unsigned
```
**Endpoints reais:**
- `GET .../motos`
- `GET .../motos/:id`
- `POST .../motos`
- `PUT/PATCH .../motos/:id`
- `DELETE .../motos/:id`

### Opção B — MockAPI **com Base Path incluindo `/motos`**
Se o seu projeto estiver com **Base path = `/api/v1/motos`**, então use:
```env
EXPO_PUBLIC_API_BASE=https://68d042fcec1a5ff33826e3bd.mockapi.io/api/v1/motos
EXPO_PUBLIC_CLOUDINARY_CLOUD=dawxgqnfj
EXPO_PUBLIC_CLOUDINARY_PRESET=perfil_unsigned
```
E **ajuste o serviço** para apontar direto à raiz do recurso (veja seção *Serviços de API*).  
**Endpoints reais continuam iguais**, mas agora o base já termina em `/motos`:
- `GET .../` (lista)
- `GET .../:id`
- etc.

> Sempre que editar o `.env`, rode `npx expo start -c`.  
> O Metro deve imprimir algo como: `🔗 [api] API_URL = https://...`

---

## 4) Serviços de API (onde o app chama a MockAPI)

### Arquivo base — `src/services/api.ts`
- Lê `EXPO_PUBLIC_API_BASE` (ou faz **fallback** local: `10.0.2.2:3000` Android, `127.0.0.1:3000` iOS).  
- Não é preciso alterar.

### Serviço de motos — `src/services/motos.service.ts`

#### Se estiver usando **Opção A** (Base path = `/api/v1`)
```ts
const resource = '/motos';

export const motosService = {
  list: () => api.get<MotoDTO[]>(resource),
  getById: (id: string) => api.get<MotoDTO>(`${resource}/${id}`),
  create: (payload: MotoDTO) => api.post<MotoDTO>(resource, payload),
  update: (id: string, payload: Partial<MotoDTO>) => api.put<MotoDTO>(`${resource}/${id}`, payload),
  remove: (id: string) => api.del<void>(`${resource}/${id}`),
};
```

#### Se estiver usando **Opção B** (Base path = `/api/v1/motos`)
```ts
const resource = ''; // base já termina em /motos

export const motosService = {
  list: () => api.get<MotoDTO>(resource || '/'),
  getById: (id: string) => api.get<MotoDTO>(`/${id}`),
  create: (payload: MotoDTO) => api.post<MotoDTO>(resource || '/', payload),
  update: (id: string, payload: Partial<MotoDTO>) => api.put<MotoDTO>(`/${id}`, payload),
  remove: (id: string) => api.del<void>(`/${id}`),
};
```

---

## 5) Execução com MockAPI (Expo Go)

```bash
npm install
npx expo start -c
```
- Abra o **Expo Go** e escaneie o QR code.
- Vá até **Vehicles** → deve listar as motos cadastradas no MockAPI.

**Testes rápidos:**
```bash
# Lista
curl -s "https://68d042fcec1a5ff33826e3bd.mockapi.io/api/v1/motos"

# Detalhe (id 1, por exemplo)
curl -s "https://68d042fcec1a5ff33826e3bd.mockapi.io/api/v1/motos/1"

# Criar
curl -s -X POST \
  -H "Content-Type: application/json" \
  -d '{"modelo":"KYY-999999","status":"Livre"}' \
  "https://68d042fcec1a5ff33826e3bd.mockapi.io/api/v1/motos"
```

---

## 6) Execução com **JSON Server** (API local, opcional)

Use **apenas** se quiser desenvolver sem internet/MockAPI.

### 6.1) Estrutura do `db.json`
Crie `db.json` na raiz com conteúdo coerente ao app:
```json
{
  "motos": [
    { "id": 1, "modelo": "KYY-123456", "status": "Alugada", "user": "João" },
    { "id": 2, "modelo": "KYY-154456", "status": "Livre" },
    { "id": 3, "modelo": "KXX-159456", "status": "Livre" }
  ]
}
```

### 6.2) Iniciar o JSON Server
```bash
npx json-server --watch db.json --port 3000
```
- Android emulador → o app acessa `http://10.0.2.2:3000`
- iOS simulador → `http://127.0.0.1:3000`

> O `api.ts` já faz esse fallback automático **se** `EXPO_PUBLIC_API_BASE` não estiver definido.

### 6.3) Rodar o app apontando para o JSON Server
```bash
# (1) Apague ou comente EXPO_PUBLIC_API_BASE no .env
# (2) Inicie o servidor local (passo 6.2)
# (3) Inicie o Expo limpo:
npx expo start -c
```

### 6.4) Testes no JSON Server
```bash
# Lista local
curl -s "http://localhost:3000/motos"
```

---

## 7) Cloudinary (upload unsigned)

No `.env`, já existem:
```env
EXPO_PUBLIC_CLOUDINARY_CLOUD=dawxgqnfj
EXPO_PUBLIC_CLOUDINARY_PRESET=perfil_unsigned
```
- Garanta que o **Upload preset** está como **unsigned** (Cloudinary → Settings → Upload).
- Endpoint de upload: `POST https://api.cloudinary.com/v1_1/<cloud>/image/upload`
- O app armazena a `secure_url` no AsyncStorage (ex.: avatar do perfil).

---

## 8) Dicas & Troubleshooting

- **Nada aparece em Vehicles**
  - Verifique o endpoint no navegador (MockAPI):  
    `https://68d042fcec1a5ff33826e3bd.mockapi.io/api/v1/motos`
  - Cheque o **Base path** do projeto no MockAPI (deve ser `/api/v1` na Opção A).
  - Veja no Metro se o app imprime o **API_URL** esperado.

- **`.env` não carregou**
  - Sempre iniciar com cache limpo: `npx expo start -c`

- **Em rede corporativa/VPN**, libere acesso à MockAPI/Cloudinary.

- **IDs do MockAPI são string**. A tela `VehiclesList` usa o **índice** para abrir `Moto1/2/3Screen` (3 telas fixas).

---

## 9) Scripts úteis
```json
{
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "doctor": "expo doctor"
  }
}
```

---

## 10) Stack
- Expo SDK 52 • React Native 0.76 • TypeScript 5
- React Navigation • AsyncStorage
- MockAPI • (opcional) JSON Server
- Cloudinary (upload unsigned)

---

## 11) Licença
Projeto acadêmico — uso educacional.
