import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
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
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        Alert.alert('Erro', 'Preencha todos os campos.');
        return;
      }
      await signIn(email, password);
    } catch (error: any) {
      Alert.alert('Erro ao entrar', error.message || 'Tente novamente.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={[globalStyles.container, styles.container]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Manage your parking</Text>
      <Text style={styles.subtitle}>Join Us</Text>

      <Input
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Create Account" onPress={handleLogin} />

      <TouchableOpacity onPress={() => navigation.navigate('SignUp' as never)}>
        <Text style={styles.linkText}>Don't have an account? <Text style={styles.link}>Sign up</Text></Text>
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
    fontFamily: fonts.bold
  }
});

export default SignInScreen;