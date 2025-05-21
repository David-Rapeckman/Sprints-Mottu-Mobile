import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';

const ChangePhotoScreen = ({ navigation }: any) => {
  const handleSelectGallery = () => {
    alert('Selecionar da galeria (não implementado)');
  };

  const handleTakePhoto = () => {
    alert('Abrir câmera (não implementado)');
  };

  const handleSave = () => {
    Alert.alert('Foto Atualizada', 'A imagem foi alterada (simulada).');
    navigation.navigate('ProfileScreen');  // alterado para ProfileScreen
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
        <Button title="Salvar e Voltar" onPress={handleSave} />
      </View>
    </View>
  );
};

export default ChangePhotoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f6f8'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#4CAF50'
  },
  buttons: {
    width: '100%',
    gap: 12
  }
});
