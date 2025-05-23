# SysTrack

**SysTrack** é um aplicativo mobile desenvolvido com **React Native + TypeScript** para o monitoramento em tempo real de **motos em pátios**, oferecendo uma visualização interativa, login seguro, e um sistema de navegação fluido para gestão e consulta dos veículos.

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- [Expo](https://expo.dev/)
- [Styled Components]
- [@expo/vector-icons](https://icons.expo.fyi/)

---

## 📱 Funcionalidades

- ✅ **Autenticação local** com `AsyncStorage`
  - Login com admin padrão (`admin@gmail.com / admin123`)
- 🗺️ **Tela de localização**
  - Exibe um mapa com motos posicionadas (botões clicáveis)
- 🛵 **Tela de motos (Moto1, Moto2, Moto3)**
  - Mostra status de cada moto: Alugada, Livre, IoT, Manutenção
- 🧾 **Lista de Veículos**
  - Visualização em cards com modelo, status e usuário
- 👤 **Perfil**
  - Dados estáticos + possibilidade de trocar imagem e editar informações
- ⚙️ **Configurações**
  - Idioma, modo escuro, notificações, acesso a Termos, Ajuda e Sobre o App
- 🔄 **Navegação via Tab Navigator**
  - Menu inferior com Location, Vehicles, Profile, Settings

---

## 🔐 Usuários Padrão

| Email                | Senha      | Papel |
|----------------------|------------|--------|
| admin@gmail.com      | admin123   | admin  |
| joao@example.com     | 123456     | user   |

---

## 🧩 Estrutura do Projeto

```bash
src/
├── assets/                   # Imagens estáticas
├── components/               # Button, Input, Header, MotoCard
├── contexts/
│   └── AuthContext.tsx       # Contexto de autenticação
├── navigation/
│   ├── AppNavigator.tsx      # Stack Navigator + Auth logic
│   ├── TabNavigator.tsx      # Navegação por abas
│   └── Types.ts              # Tipagem de rotas
├── screens/
│   ├── Auth/                 # Splash, SignIn, SignUp
│   ├── Home/                 # LocationScreen
│   ├── Vehicles/             # VehiclesList, Moto1, Moto2, Moto3
│   ├── Profile/              # Profile, Edit, Foto
│   └── Settings/             # Configurações, Ajuda, Termos, Sobre
├── services/
│   └── authService.ts        # Serviço de autenticação (mock)
├── styles/
│   ├── colors.ts
│   ├── fonts.ts
│   ├── global.ts
│   └── metrics.ts
└── types/
    ├── auth.ts
    ├── navigation.ts
    ├── user.ts
    └── vehicles.ts
