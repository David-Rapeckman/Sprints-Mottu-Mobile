import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

const LocationScreen = ({ navigation }: any) => {
  const handleMotoClick = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho fixo no topo */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Location</Text>
      </View>

      <Image
        source={require('../../../assets/parking-lot.jpg')}
        style={styles.map}
      />
      <TouchableOpacity
        style={[styles.marker, { top: height * 0.28, left: width * 0.20 }]}
        onPress={() => handleMotoClick('Moto1Screen')}
        activeOpacity={0.7}
      />
      <TouchableOpacity
        style={[styles.marker, { top: height * 0.30, left: width * 0.80 }]}
        onPress={() => handleMotoClick('Moto2Screen')}
        activeOpacity={0.7}
      />
      <TouchableOpacity
        style={[styles.marker, { top: height * 0.50, left: width * 0.70 }]}
        onPress={() => handleMotoClick('Moto3Screen')}
        activeOpacity={0.7}
      />
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 56,
    backgroundColor: 'rgba(40, 167, 69, 0.7)', // verde #28A745 com 70% de opacidade
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  map: {
    width: width,
    height: height,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  marker: {
    position: 'absolute',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 22, 0, 0.85)',
    borderWidth: 3,
    borderColor: '#fff',
    elevation: 8,
    shadowColor: 'green',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
});
