SysTrack — Monitoramento Inteligente de Motos (Mottu Challenge)

Escopo do Aplicativo
O SysTrack é um app mobile (Expo/React Native) para mapeamento e monitoramento em tempo real de motos em pátios de múltiplas filiais.
Principais objetivos:
- Visualizar motos por pátio/filial e consultar status.
- Autenticação e sessão persistente (usuários internos).
- Gestão básica de perfis e configurações.
- Armazenamento local para preferências e cache (AsyncStorage).
- Base preparada para integrar IoT/telemetria e visão computacional (futuras sprints).
Observação: projeto como prova de conceito funcional com arquitetura escalável e organização de pastas para evolução.

Integrantes (Nome completo e RM)
- David Rapeckman Gomes de Souza — RM 556607
- [Nome do integrante 2] — [RM]
- [Nome do integrante 3] — [RM]
Curso: FIAP – Análise e Desenvolvimento de Sistemas
Disciplina/Entrega: DevOps Tools & Cloud Computing – Sprint (Mottu Challenge)

Instruções de Instalação e Execução

1) Pré-requisitos
- Node.js 20.x (LTS)
- npm 10.x ou yarn
- Expo Go instalado no smartphone (Android/iOS), ou emulador (Android Studio AVD ou Xcode Simulator no macOS)
- (Opcional) EAS CLI para builds nativos

2) Clonar e instalar

   ```bash
   git clone [https://github.com//SysTrack.git](https://github.com/David-Rapeckman/Sprints-Mottu-Mobile/)
  ``
Navegue até a pasta do projeto:

   ```bash
   cd Sprints-Mottu-Mobile
   ```
   ```bash
npm install   (ou: yarn)
```
3) Executar em modo desenvolvimento (Expo)
npx expo start
Atalhos: a (Android), i (iOS), w (web). No celular, abrir o app Expo Go e escanear o QR Code.

4) Build com EAS (opcional)
# login (uma vez)
npx eas-cli login

# configurar perfis (gera/atualiza eas.json)
npx eas-cli build:configure

# build de teste interno (Android APK)
npx eas-cli build -p android --profile preview

# produção (Android AAB ou iOS archive)
npx eas-cli build -p android --profile production
npx eas-cli build -p ios --profile production



🚀 Como rodar com a API (Expo Go + MockAPI + Cloudinary)

Esta seção explica como executar o app consumindo a MockAPI para motos e usando o Cloudinary para imagens (foto de perfil, etc). O fluxo funciona no Expo Go (Android/iOS) e em emuladores.

1) Pré-requisitos
- Node 18/20 instalado
- Expo Go no celular (Play Store/App Store)
- Acesso à MockAPI e Cloudinary (já configurados no projeto)

2) Variáveis de ambiente
- Crie um arquivo .env na raiz do projeto (uma vez).
- Sempre que editar o .env, reinicie com: npx expo start --clear.

Exemplo de .env:

# Base da MockAPI (sem barra no final)
EXPO_PUBLIC_API_BASE=https://68d042fcec1a5ff33826e3bd.mockapi.io/api/v1

# Cloudinary (upload unsigned)
EXPO_PUBLIC_CLOUDINARY_CLOUD=dawxgqnfj
EXPO_PUBLIC_CLOUDINARY_PRESET=perfil_unsigned

Obs.: no Cloudinary, o Upload Preset deve estar como unsigned (Settings → Upload → Upload presets).

3) Instalação e execução
npm install
npx expo doctor --fix-dependencies
npx expo start --clear

Abra o Expo DevTools e escaneie o QR code com o Expo Go (ou rode no emulador Android/iOS).

4) O que o app consome da API

MockAPI (motos):
- GET /motos – lista de motos exibida em VehiclesList
- GET /motos/:id – detalhamento (opcional)
- POST /motos, PUT /motos/:id, DELETE /motos/:id – CRUD (opcionais para MVP)

Cloudinary (imagens):
- Upload unsigned via POST https://api.cloudinary.com/v1_1/<cloud>/image/upload
- O app salva a secure_url como avatar no AsyncStorage

5) Como validar rapidamente

No app:
- Aba Vehicles deve carregar as motos da MockAPI (se a API estiver vazia, crie alguns itens na collection motos).
- Em Profile → Change Photo, cole uma URL de imagem e salve (o app envia ao Cloudinary e guarda a URL).

Via cURL (opcional):

# Listar motos
curl -s "https://68d042fcec1a5ff33826e3bd.mockapi.io/api/v1/motos"

# Criar uma moto
curl -s -X POST "https://68d042fcec1a5ff33826e3bd.mockapi.io/api/v1/motos" \
  -H "Content-Type: application/json" \
  -d '{"modelo":"KYY-999999","status":"Livre","user":""}'

6) Dicas e solução de problemas
- Se o app não reconhecer o .env, rode com cache limpo: npx expo start --clear
- Se aparecer alerta de versões, rode: npx expo doctor --fix-dependencies
- Em redes corporativas, verifique VPN/proxy (a MockAPI precisa estar acessível do celular).

Protótipo no Figma
Link do Figma (atualizado): https://www.figma.com/design/SEU_LINK_AQUI

Versão publicada no Expo
Projeto no Expo: https://expo.dev/accounts/rapeckman/projects/systrack
Observação: para testes internos, compartilhe o link da página do build gerado pelo EAS (Android: APK com botão Install; iOS: TestFlight). Para distribuição pública, publicar nas lojas (Play Store / App Store) e compartilhar os respectivos links.

Tecnologias Principais
- Expo SDK 52
- React Native 0.76.x
- TypeScript 5.x
- React Navigation (stack/tabs) [se aplicável]
- AsyncStorage para persistência local
- @expo/vector-icons (requer expo-font)
- EAS Build/Update para CI e distribuição
Dica: use "npx expo install --check" para validar dependências.

Estrutura de Pastas (resumo)
.
├── assets/
│   ├── logo.png
│   ├── adaptive-icon.png
│   └── splash.png
├── app/                 (se usando roteamento por pastas do Expo Router)
├── src/
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── screens/         (Auth, Home, Vehicles, Profile, Settings...)
│   ├── services/
│   ├── contexts/        (AuthContext, etc.)
│   └── types/
├── app.json
├── eas.json
├── package.json
└── tsconfig.json

Scripts úteis (package.json)
"scripts": {
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web",
  "doctor": "expo doctor"
}

Status da Sprint (resumo)
- [x] Setup do projeto (Expo + TS)
- [x] Autenticação + sessão persistente
- [x] Telas base (Home, Vehicles, Profile, Settings)
- [x] Build de preview via EAS
- [ ] Integração IoT/telemetria (próximas sprints)


Notas
- Se o expo doctor acusar assets ausentes (ex.: splash/adaptive icon), mantenha:
  ./assets/adaptive-icon.png
  ./assets/splash.png
- Se @expo/vector-icons estiver no projeto, instale o peer:
  npx expo install expo-font

Licença
Projeto acadêmico — uso educacional.

