import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

const SignUpScreen = ({ navigation }: any) => {
  const { login } = useAuth(); // simulação de criação -> login direto
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [verificaSenha, setVerificaSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleRegister = () => {
    if (!email || !senha || !verificaSenha || !cpf || !dataNascimento) {
      return Alert.alert('Erro', 'Preencha todos os campos');
    }
    if (senha !== verificaSenha) {
      return Alert.alert('Erro', 'As senhas não coincidem');
    }
    login(email, senha); // simula criação de conta
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Manage your parking</Text>
      <Text style={styles.subtitle}>Join Us</Text>

      <TextInput placeholder="E-mail" style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput placeholder="Senha" style={styles.input} value={senha} secureTextEntry onChangeText={setSenha} />
      <TextInput placeholder="Verifique sua senha" style={styles.input} value={verificaSenha} secureTextEntry onChangeText={setVerificaSenha} />
      <TextInput placeholder="CPF" style={styles.input} value={cpf} keyboardType="numeric" onChangeText={setCpf} />
      <TextInput placeholder="Data de nascimento" style={styles.input} value={dataNascimento} onChangeText={setDataNascimento} />

      <Button title="Create Account" onPress={handleRegister} />

      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>
          Sign in
        </Text>
      </Text>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: { padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 12,
    borderRadius: 6
  },
  footerText: { marginTop: 20, textAlign: 'center' },
  link: { color: 'blue', textDecorationLine: 'underline' }
});
