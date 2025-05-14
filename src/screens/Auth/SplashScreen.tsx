import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      <Button title="Get Started" onPress={() => navigation.navigate('SignIn')} />
      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>
          Sign in
        </Text>
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  footerText: {
    marginTop: 20
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
});
