// (mantido + bloco de dados remotos)
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const API_BASE = 'https://68d042fcec1a5ff33826e3bd.mockapi.io/api/v1'; // ADICIONADO

const Moto3Screen = () => {
  const navigation = useNavigation<any>();
  const [remote, setRemote] = useState<any | null>(null); // ADICIONADO
  const [loading, setLoading] = useState(false); // ADICIONADO

  useEffect(() => { // ADICIONADO
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/motos`);
        const list = await res.json();
        if (Array.isArray(list) && list.length > 2) setRemote(list[2]);
      } catch (_) {} finally { setLoading(false); }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('MainApp')}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Moto 3</Text>
      </View>

      <View style={styles.container}>
        <Image source={require('../../../assets/Moto1.png')} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.label}>Modelo:</Text>
          <Text style={styles.value}>KXX-159456</Text>

          <Text style={styles.label}>Usuário:</Text>
          <Text style={styles.value}>—</Text>

          <Text style={styles.label}>Status:</Text>
          <Text style={styles.value}>Livre</Text>

          <Text style={styles.label}>Status IoT:</Text>
          <Text style={styles.value}>Conectada</Text>

          <Text style={styles.label}>Manutenção:</Text>
          <Text style={styles.value}>OK</Text>
        </View>

        <View style={{ marginTop: 16, width: '100%' }}>
          <Text style={[styles.label, { marginBottom: 6 }]}>Dados remotos (MockAPI):</Text>
          {loading ? (
            <ActivityIndicator />
          ) : remote ? (
            <Text style={styles.value}>
              #{remote.id} • {remote.modelo || remote.model || '—'} • {remote.status || '—'}
            </Text>
          ) : (
            <Text style={styles.value}>Nenhuma moto remota encontrada.</Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Moto3Screen;

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
