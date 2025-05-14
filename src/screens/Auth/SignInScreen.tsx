import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

const SignInScreen = ({ navigation }: any) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      return Alert.alert('Erro', 'Preencha todos os campos');
    }
    login(email, password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage your parking</Text>
      <Text style={styles.subtitle}>Join Us</Text>

      <TextInput
        placeholder="E-mail"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Create Account" onPress={handleLogin} />

      <Text style={styles.footerText}>
        Don’t have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Sign up
        </Text>
      </Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
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
