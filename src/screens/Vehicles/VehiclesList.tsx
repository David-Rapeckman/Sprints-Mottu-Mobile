import React from 'react';
import { View, FlatList, Text, StyleSheet, SafeAreaView } from 'react-native';
import MotoCard from '../../components/MotoCard';
import { useNavigation } from '@react-navigation/native';

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

const VehiclesList = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Veículos</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Veículos Disponíveis</Text>

        <FlatList
          data={motos}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <MotoCard
              modelo={item.modelo}
              status={item.status}
              user={item.user}
              image={item.image}
              onPress={() => navigation.navigate(item.id)}
            />
          )}
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
