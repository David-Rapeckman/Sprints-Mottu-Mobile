import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

const SplashScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>SysTrack</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        {' '}
        Ainda não tem uma conta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          {' '}
          Cadastre-se{' '}
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
    paddingHorizontal: 30,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 32,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  title: {
    fontSize: fonts.size.title + 8,
    fontFamily: fonts.bold,
    color: colors.primary,
    marginBottom: 48,
    letterSpacing: 2,
  },
  button: {
    backgroundColor: colors.primary,
    width: '70%',
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: 24,
    elevation: 3, // sombra para Android
    shadowColor: '#000', // sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: fonts.bold,
    fontSize: fonts.size.medium + 2,
  },
  footerText: {
    fontFamily: fonts.regular,
    color: colors.gray,
    fontSize: fonts.size.small,
  },
  link: {
    color: colors.primary,
    fontFamily: fonts.bold,
    textDecorationLine: 'underline',
  },
});
