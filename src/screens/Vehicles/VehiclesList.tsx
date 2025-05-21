import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MotoCard from '../../components/MotoCard';
import { useNavigation } from '@react-navigation/native';

const motos = [
  {
    id: 'Moto1Screen',
    modelo: 'KYY-123456',
    status: 'Alugada',
    user: 'João',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 'Moto2Screen',
    modelo: 'KYY-154456',
    status: 'Livre',
    user: '',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 'Moto3Screen',
    modelo: 'KXX-159456',
    status: 'Livre',
    user: '',
    image: 'https://via.placeholder.com/100',
  },
];

const VehiclesList = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <FlatList
        data={motos}
        keyExtractor={(item) => item.id}
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
    padding: 20,
  },
});
