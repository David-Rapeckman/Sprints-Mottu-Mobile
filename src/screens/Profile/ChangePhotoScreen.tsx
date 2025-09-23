import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';

const ChangePhotoScreen = ({ navigation }: any) => {
  const handleSelectGallery = () => {
    // alert('Selecionar da galeria (não implementado)');
    Alert.alert('Selecionar da galeria (não implementado)'); // linha corrigida mantendo a original comentada
  };

  const handleTakePhoto = () => {
    // alert('Abrir câmera (não implementado)');
    Alert.alert('Abrir câmera (não implementado)'); // linha corrigida mantendo a original comentada
  };

  const handleSave = () => {
    Alert.alert('Foto Atualizada', 'A imagem foi alterada (simulada).');
    navigation.navigate('ProfileScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Change Photo</Text>
      </View>

      <Image source={require('../../../assets/icon.png')} style={styles.image} />

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
    backgroundColor: '#f4f6f8',
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
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#4CAF50',
    marginTop: 80,
  },
  buttons: {
    width: '100%',
    gap: 12,
  },
});
