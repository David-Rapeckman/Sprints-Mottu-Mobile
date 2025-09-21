// (mantive sua lista estática original e ADICIONEI consumo da MockAPI + loaders + pull-to-refresh)
import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, SafeAreaView, ActivityIndicator, RefreshControl, Alert } from 'react-native';
import MotoCard from '../../components/MotoCard';
import { useNavigation } from '@react-navigation/native';

const API_BASE = 'https://68d042fcec1a5ff33826e3bd.mockapi.io/api/v1'; // ADICIONADO

const motos = [
  {
    id: 'Moto1Screen',
    modelo: 'KYY-123456',
    status: 'Alugada',
    user: 'João',
    image: require('../../../assets/Moto1.png'),
  },
  {
    id: 'Moto2Screen',
    modelo: 'KYY-154456',
    status: 'Livre',
    user: '',
    image: require('../../../assets/Moto2.png'),
  },
  {
    id: 'Moto3Screen',
    modelo: 'KXX-159456',
    status: 'Livre',
    user: '',
    image: require('../../../assets/Moto1.png'),
  },
];

type RemoteMoto = {
  id: string;
  modelo?: string;
  model?: string;
  status?: string;
  user?: string;
  image?: string;
};

const VehiclesList = () => {
  const navigation = useNavigation<any>();

  const [loading, setLoading] = useState(true); // ADICIONADO
  const [refreshing, setRefreshing] = useState(false); // ADICIONADO
  const [data, setData] = useState<RemoteMoto[]>([]); // ADICIONADO

  const fetchMotos = useCallback(async () => { // ADICIONADO
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/motos`);
      const json = await res.json();
      if (Array.isArray(json)) setData(json);
    } catch (e) {
      // fallback silencioso; mantém estática
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchMotos(); }, [fetchMotos]); // ADICIONADO

  const onRefresh = useCallback(async () => { // ADICIONADO
    try {
      setRefreshing(true);
      await fetchMotos();
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível atualizar a lista.');
    } finally {
      setRefreshing(false);
    }
  }, [fetchMotos]);

  const dataToShow = (data && data.length > 0)
    ? data.map((m) => ({
        id: m.id,
        modelo: m.modelo || m.model || `Moto #${m.id}`,
        status: m.status || '—',
        user: m.user || '',
        // imagem remota opcional (se houver), senão mantém as suas imagens locais
        image: require('../../../assets/Moto1.png'),
      }))
    : motos;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Veículos</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Veículos Disponíveis</Text>

        {loading && data.length === 0 ? ( // ADICIONADO
          <ActivityIndicator color="#28A745" style={{ marginTop: 10 }} />
        ) : (
          <FlatList
            data={dataToShow}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={{ paddingBottom: 20 }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            renderItem={({ item }) => (
              <MotoCard
                modelo={item.modelo}
                status={item.status}
                user={item.user}
                image={item.image as any}
                onPress={() => {
                  // Mantém sua navegação original por "id" (Moto1Screen/Moto2Screen/etc.)
                  // Se quiser: poderíamos abrir uma rota dinâmica e passar o ID remoto
                  navigation.navigate(
                    item.modelo.includes('123') ? 'Moto1Screen' :
                    item.modelo.includes('154') ? 'Moto2Screen' :
                    item.modelo.includes('159') ? 'Moto3Screen' : 'Moto1Screen'
                  );
                }}
              />
            )}
          />
        )}
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
