import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

const ProfileScreen = ({ navigation }: any) => {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do Usuário</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Telefone:</Text>
        <Text style={styles.value}>(11) 98765-4321</Text>

        <Text style={styles.label}>Gênero:</Text>
        <Text style={styles.value}>Masculino</Text>

        <Text style={styles.label}>Aniversário:</Text>
        <Text style={styles.value}>01/01/2000</Text>

        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.value}>{user}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Alterar Informações" onPress={() => navigation.navigate('EditProfileScreen')} />
        <Button title="Logout" onPress={logout} color="#d9534f" />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  infoBox: { marginBottom: 30 },
  label: { fontWeight: 'bold', marginTop: 10 },
  value: { fontSize: 16 },
  buttonContainer: { gap: 10 }
});
