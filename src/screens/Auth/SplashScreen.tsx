import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

const SplashScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/icon.png')} style={styles.logo} />
      <Text style={styles.title}>SysTrack</Text>
      <Button title="Entrar" onPress={() => navigation.navigate('SignIn')} />
      <Text style={styles.footerText}>
        Ainda não tem uma conta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Cadastre-se
        </Text>
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: fonts.size.title,
    fontFamily: fonts.bold,
    color: colors.primary,
    marginBottom: 24,
  },
  footerText: {
    marginTop: 20,
    fontFamily: fonts.regular,
    color: colors.gray,
    fontSize: fonts.size.medium,
  },
  link: {
    color: colors.primary,
    fontFamily: fonts.bold,
  },
});
