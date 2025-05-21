import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ChangePhotoScreen = () => {
  const handleSelectGallery = () => {
    alert('Selecionar da galeria (não implementado)');
  };

  const handleTakePhoto = () => {
    alert('Abrir câmera (não implementado)');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/icon.png')}
        style={styles.image}
      />
      <View style={styles.buttons}>
        <Button title="Selecionar da Galeria" onPress={handleSelectGallery} />
        <Button title="Tirar Foto Agora" onPress={handleTakePhoto} />
      </View>
    </View>
  );
};

export default ChangePhotoScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
  buttons: { width: '100%', gap: 12 }
});
