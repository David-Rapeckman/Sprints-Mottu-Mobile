import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Moto2Screen = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/200x150' }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.label}>Modelo:</Text>
        <Text style={styles.value}>KYY-154456</Text>

        <Text style={styles.label}>Usuário:</Text>
        <Text style={styles.value}>—</Text>

        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>Livre</Text>

        <Text style={styles.label}>Status IoT:</Text>
        <Text style={styles.value}>Desconectada</Text>

        <Text style={styles.label}>Manutenção:</Text>
        <Text style={styles.value}>Pendente</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainApp')}>
        <Text style={styles.buttonText}>Voltar para Lista</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Moto2Screen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20, backgroundColor: '#fff' },
  image: { width: 200, height: 150, borderRadius: 10, marginBottom: 20 },
  info: { width: '100%' },
  label: { fontWeight: 'bold', fontSize: 16, marginTop: 12 },
  value: { fontSize: 16, color: '#555' },
  button: {
    marginTop: 40,
    backgroundColor: '#2e86de',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
