// src/screens/Auth/SignInScreen.tsx
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { globalStyles } from '../../styles/global';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const navigation = useNavigation<any>();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      await signIn(email, password);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Location' }]
      });
    } catch (error: any) {
      Alert.alert('Erro ao entrar', error.message || 'Credenciais inválidas.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={[globalStyles.container, styles.container]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>SysTrack</Text>
      <Text style={styles.subtitle}>Acesse sua conta</Text>

      <Input
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>
          Não tem uma conta? <Text style={styles.link}>Cadastre-se</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.gray,
    textAlign: 'center',
    marginBottom: 24,
  },
  linkText: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.gray,
    marginTop: 16,
  },
  link: {
    color: colors.primary,
    fontFamily: fonts.bold,
  },
});
