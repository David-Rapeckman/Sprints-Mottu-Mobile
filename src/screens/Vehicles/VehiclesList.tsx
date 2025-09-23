import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import MotoCard from '../../components/MotoCard';
import { useNavigation } from '@react-navigation/native';
import { getMotos } from '../../services/api';

const VehiclesList = () => {
  const navigation = useNavigation<any>();
  const [motos, setMotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMotos()
      .then((data) => setMotos(data))
      .catch((e) => Alert.alert('Erro ao carregar motos', e?.message || ''))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={[styles.safeArea, { alignItems: 'center', justifyContent: 'center' }]}>
        <ActivityIndicator size="large" color="#28A745" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Veículos</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Veículos Disponíveis</Text>
        <FlatList
          data={motos}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <MotoCard
              modelo={item.modelo}
              status={item.status}
              user={item.user}
              // Se sua API não retorna imagem, usa um placeholder local:
              image={require('../../../assets/Moto1.png')}
              // id numérico 1/2/3 -> "Moto1Screen", "Moto2Screen", ...
              onPress={() => navigation.navigate(`Moto${item.id}Screen`)}
            />
          )}
          ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 16 }}>Nenhum veículo encontrado.</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

export default VehiclesList;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 100,
  },
  header: {
    position: 'absolute',
    top: 0,
    height: 79,
    width: '100%',
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
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#28A745',
    marginBottom: 16,
    textAlign: 'center',
  },
});
