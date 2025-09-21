// (mantive tudo e acrescentei uma pequena legenda/overlay e acessibilidade)
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions, Text, SafeAreaView } from 'react-native';

const { width, height } = Dimensions.get('window');

const LocationScreen = ({ navigation }: any) => {
  const handleMotoClick = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Location</Text>
      </View>

      <Image
        source={require('../../../assets/parking-lot.jpg')}
        style={styles.map}
      />

      {/* ADICIONADO: pequena legenda */}
      <View style={styles.legend}>
        <View style={[styles.legendDot, { backgroundColor: 'rgba(255, 22, 0, 0.85)' }]} />
        <Text style={styles.legendText}>Moto</Text>
      </View>

      <TouchableOpacity
        accessibilityLabel="Moto 1"
        style={[styles.marker, { top: height * 0.28, left: width * 0.20 }]}
        onPress={() => handleMotoClick('Moto1Screen')}
        activeOpacity={0.7}
      />
      <TouchableOpacity
        accessibilityLabel="Moto 2"
        style={[styles.marker, { top: height * 0.30, left: width * 0.80 }]}
        onPress={() => handleMotoClick('Moto2Screen')}
        activeOpacity={0.7}
      />
      <TouchableOpacity
        accessibilityLabel="Moto 3"
        style={[styles.marker, { top: height * 0.50, left: width * 0.70 }]}
        onPress={() => handleMotoClick('Moto3Screen')}
        activeOpacity={0.7}
      />
    </SafeAreaView>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 79,
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
  legend: { // ADICIONADO
    position: 'absolute',
    bottom: 24,
    left: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: 'rgba(0,0,0,0.55)',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: { width: 10, height: 10, borderRadius: 5, marginRight: 8 },
  legendText: { color: '#fff', fontWeight: '600' },
});
