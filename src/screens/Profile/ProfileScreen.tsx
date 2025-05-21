import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
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

      <View style={styles.avatarContainer}>
        <Image
          source={require('../../../assets/icon.png')}
          style={styles.avatar}
        />
        <Button
          title="Alterar Foto"
          onPress={() => navigation.navigate('ChangePhotoScreen')}
        />
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{user?.name}</Text>

        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.value}>{user?.email}</Text>

        <Text style={styles.label}>Data de nascimento:</Text>
        <Text style={styles.value}>{user?.birthdate || 'Não informado'}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Editar Informações"
          onPress={() => navigation.navigate('EditProfileScreen')}
        />
        <View style={styles.logoutWrapper}>
          <Button title="Sair" onPress={signOut} />
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
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
    gap: 12,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.lightGray,
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
