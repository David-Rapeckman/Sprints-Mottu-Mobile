import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
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
  );
};

export default VehiclesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#28A745',
    marginBottom: 16,
    textAlign: 'center',
  },
});
