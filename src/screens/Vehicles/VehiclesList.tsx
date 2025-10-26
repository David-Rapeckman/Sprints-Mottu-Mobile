// src/screens/Vehicles/VehiclesList.tsx
import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, SafeAreaView, ActivityIndicator, Alert } from 'react-native';
import MotoCard from '../../components/MotoCard';
import { useNavigation } from '@react-navigation/native';
import { motosService, MotoDTO } from '../../services/motos.service';

const VehiclesList = () => {
  const navigation = useNavigation<any>();
  const [motos, setMotos] = useState<MotoDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    motosService
      .list()
      .then((data) => setMotos(Array.isArray(data) ? data : []))
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
          renderItem={({ item, index }) => {
            // alguns registros seus usam "placa"; faz fallback:
            const titulo =
              (item.modelo && item.modelo.trim()) ||
              (item as any).placa ||
              '-';

            return (
              <MotoCard
                modelo={titulo}
                status={item.status || '-'}
                user={item.user || ''}
                image={require('../../../assets/Moto1.png')}
                // você tem 3 telas fixas (Moto1/2/3). Usa o índice.
                onPress={() => {
                  const screen = `Moto${index + 1}Screen`;
                  if (index < 3) navigation.navigate(screen as never);
                }}
              />
            );
          }}
          ListEmptyComponent={
            <Text style={{ textAlign: 'center', marginTop: 16 }}>
              Nenhum veículo encontrado.
            </Text>
          }
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
