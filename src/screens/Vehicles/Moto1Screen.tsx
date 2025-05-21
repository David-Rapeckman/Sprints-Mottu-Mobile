import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Moto1Screen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/200x150' }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.label}>Modelo:</Text>
        <Text style={styles.value}>KYY-123456</Text>

        <Text style={styles.label}>Usuário:</Text>
        <Text style={styles.value}>João</Text>

        <Text style={styles.label}>Status:</Text>
        <Text style={styles.value}>Alugada</Text>

        <Text style={styles.label}>Status IoT:</Text>
        <Text style={styles.value}>Conectada</Text>

        <Text style={styles.label}>Manutenção:</Text>
        <Text style={styles.value}>OK</Text>
      </View>
    </View>
  );
};

export default Moto1Screen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  image: { width: 200, height: 150, borderRadius: 10, marginBottom: 20 },
  info: { width: '100%' },
  label: { fontWeight: 'bold', fontSize: 16, marginTop: 12 },
  value: { fontSize: 16, color: '#555' },
});
