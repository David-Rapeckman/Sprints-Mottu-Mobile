import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const LocationScreen = ({ navigation }: any) => {
  const handleMotoClick = (screenName: string) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/parking-lot.jpg')}
        style={styles.map}
      />
      <TouchableOpacity style={[styles.marker, { top: height * 0.2, left: width * 0.3 }]} onPress={() => handleMotoClick('Moto1Screen')} />
      <TouchableOpacity style={[styles.marker, { top: height * 0.4, left: width * 0.55 }]} onPress={() => handleMotoClick('Moto2Screen')} />
      <TouchableOpacity style={[styles.marker, { top: height * 0.6, left: width * 0.4 }]} onPress={() => handleMotoClick('Moto3Screen')} />
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  map: {
    width: width,
    height: height,
    resizeMode: 'cover',
    position: 'absolute',
  },
  marker: {
    position: 'absolute',
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
    borderWidth: 2,
    borderColor: '#fff',
    elevation: 5,
  },
});
