import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AboutAppScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#2e86de" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

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
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  backButton: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  backText: { marginLeft: 8, fontSize: 16, color: '#2e86de' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 10 },
  version: { fontSize: 14, color: 'gray', marginTop: 20 }
});
