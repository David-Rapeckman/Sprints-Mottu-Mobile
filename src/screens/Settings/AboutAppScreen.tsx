import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutAppScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o SysTrack</Text>
      <Text style={styles.text}>
        SysTrack é uma solução inteligente para monitoramento de frotas de motocicletas em tempo real.
      </Text>
      <Text style={styles.text}>
        Desenvolvido como projeto acadêmico da FIAP, esse aplicativo utiliza recursos modernos de rastreamento, conectividade IoT e interface amigável para melhorar a gestão de pátios de veículos.
      </Text>
      <Text style={styles.version}>Versão 1.0.0</Text>
    </View>
  );
};

export default AboutAppScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 10 },
  version: { fontSize: 14, color: 'gray', marginTop: 20 }
});
