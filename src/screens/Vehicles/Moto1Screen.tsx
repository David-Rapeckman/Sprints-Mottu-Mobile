import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Moto1Screen = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('MainApp')}

        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Moto 1</Text>
      </View>

      <View style={styles.container}>
        <Image source={require('../../../assets/Moto1.png')} style={styles.image} />
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
    </SafeAreaView>
  );
};

export default Moto1Screen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: 100,
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 79,
    backgroundColor: 'rgba(40, 167, 69, 0.7)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    zIndex: 10,
  },
  backButton: {
    marginRight: 12,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  info: {
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
});
