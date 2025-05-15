// ✅ SignUpScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { globalStyles } from '../../styles/global';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const { signIn } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = async () => {
    try {
      if (!name || !email) {
        Alert.alert('Erro', 'Preencha todos os campos.');
        return;
      }

      await signIn(email, '123456');
    } catch (error: any) {
      Alert.alert('Erro no cadastro', error.message || 'Tente novamente.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={[globalStyles.container, styles.container]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Criar Conta</Text>

      <Input placeholder="Nome completo" value={name} onChangeText={setName} />
      <Input placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Button title="Cadastrar" onPress={handleSignUp} />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>Já possui uma conta? <Text style={styles.link}>Entrar</Text></Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.black,
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
    fontFamily: fonts.bold
  }
});

export default SignUpScreen;
