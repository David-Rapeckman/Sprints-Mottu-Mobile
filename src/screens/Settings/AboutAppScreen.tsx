import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AboutAppScreen = ({ navigation }: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>About</Text>
      </View>

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
    </SafeAreaView>
  );
};

export default AboutAppScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 79,
    backgroundColor: 'rgba(40, 167, 69, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#2e86de',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  version: {
    fontSize: 14,
    color: 'gray',
    marginTop: 20,
  },
});
