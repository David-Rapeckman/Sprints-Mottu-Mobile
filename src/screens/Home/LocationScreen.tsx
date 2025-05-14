import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const LocationScreen = ({ navigation }: any) => {
  const handleMotoClick = (motoId: string) => {
    navigation.navigate(motoId); // redireciona para Moto1Screen, Moto2Screen, etc
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/parking-lot.jpg')} style={styles.map} />
      <TouchableOpacity style={[styles.marker, { top: 100, left: 120 }]} onPress={() => handleMotoClick('Moto1Screen')} />
      <TouchableOpacity style={[styles.marker, { top: 180, left: 200 }]} onPress={() => handleMotoClick('Moto2Screen')} />
      <TouchableOpacity style={[styles.marker, { top: 250, left: 150 }]} onPress={() => handleMotoClick('Moto3Screen')} />
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1, resizeMode: 'cover' },
  marker: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'white'
  }
});
