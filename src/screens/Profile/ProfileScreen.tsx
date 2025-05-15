import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../../components/Button';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { globalStyles } from '../../styles/global';

const ProfileScreen = ({ navigation }: any) => {
  const { user, signOut } = useAuth();

  return (
    <View style={[globalStyles.container, styles.container]}>
      <Text style={styles.title}>Perfil do Usuário</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Telefone:</Text>
        <Text style={styles.value}>(11) 98765-4321</Text>

        <Text style={styles.label}>Gênero:</Text>
        <Text style={styles.value}>Masculino</Text>

        <Text style={styles.label}>Aniversário:</Text>
        <Text style={styles.value}>01/01/2000</Text>

        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.value}>{user?.email}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Alterar Informações" onPress={() => navigation.navigate('EditProfileScreen')} />
        <View style={styles.logoutWrapper}>
          <Button title="Logout" onPress={signOut} />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.bold,
    textAlign: 'center',
    color: colors.black,
    marginBottom: 20,
  },
  infoBox: {
    marginBottom: 30,
  },
  label: {
    fontFamily: fonts.bold,
    marginTop: 10,
    color: colors.gray,
  },
  value: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.black,
  },
  buttonContainer: {
    gap: 10,
  },
  logoutWrapper: {
    marginTop: 8,
  },
});