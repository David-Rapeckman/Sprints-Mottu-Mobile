// (mantive todo o seu código e apenas adicionei melhorias: loading + dismiss teclado + dicas)
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { globalStyles } from '../../styles/global';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false); // ADICIONADO

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      setLoading(true); // ADICIONADO
      await signIn(email, password);
    } catch (error: any) {
      Alert.alert('Erro ao entrar', error.message || 'Credenciais inválidas.');
    } finally {
      setLoading(false); // ADICIONADO
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={[globalStyles.container, styles.container]}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subtitle}>Acesse sua conta para continuar</Text>

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

        <Button title={loading ? 'Entrando...' : 'Entrar'} onPress={handleLogin} disabled={loading} />
        {loading && <ActivityIndicator style={{ marginTop: 12 }} color={colors.primary} />} {/* ADICIONADO */}

        <TouchableOpacity onPress={() => navigation.navigate('SignUp' as never)}>
          <Text style={styles.linkText}>
            Não tem uma conta? <Text style={styles.link}>Cadastre-se</Text>
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
    title: {
      fontSize: fonts.size.title,
      fontFamily: fonts.bold,
      color: colors.primary,
      textAlign: 'center',
      marginBottom: 6,
    },
    subtitle: {
      fontSize: fonts.size.medium,
      color: colors.gray,
      fontFamily: fonts.regular,
      textAlign: 'center',
      marginBottom: 32,
    },
    linkText: {
      textAlign: 'center',
      fontSize: fonts.size.medium,
      color: colors.gray,
      marginTop: 32,
      lineHeight: 22,
    },
    link: {
      color: colors.primary,
      fontFamily: fonts.bold,
    },
  });
