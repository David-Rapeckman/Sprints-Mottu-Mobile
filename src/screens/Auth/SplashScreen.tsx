import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      <Button title="Entrar" onPress={() => navigation.navigate('SignIn')} />
      <Text style={styles.footerText}>
        Novo por aqui?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Cadastrar
        </Text>
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logo: { width: 200, height: 200, marginBottom: 20 },
  footerText: { marginTop: 20 },
  link: { color: 'blue', textDecorationLine: 'underline' },
});

export default SplashScreen;