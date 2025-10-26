// src/screens/Profile/ChangePhotoScreen.tsx
import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { uploadToCloudinary } from '../../services/cloudinary';

const ChangePhotoScreen = ({ navigation }: any) => {
  const [localUri, setLocalUri] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos da permissão para acessar sua galeria.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setLocalUri(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'Precisamos da permissão para usar a câmera.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setLocalUri(result.assets[0].uri);
    }
  };

  const handleSave = async () => {
    if (!localUri) {
      Alert.alert('Ops!', 'Selecione ou tire uma foto primeiro.');
      return;
    }

    try {
      setUploading(true);
      const url = await uploadToCloudinary(localUri);
      await AsyncStorage.setItem('profile_photo_url', url);
      Alert.alert('Sucesso', 'Foto atualizada!');
      navigation.navigate('ProfileScreen');
    } catch (e: any) {
      Alert.alert('Erro no upload', e?.message || 'Tente novamente.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Change Photo</Text>
      </View>

      <Image
        source={
          localUri
            ? { uri: localUri }
            : require('../../../assets/icon.png')
        }
        style={styles.image}
      />

      <View style={styles.buttons}>
        {uploading ? (
          <ActivityIndicator size="large" color="#54B12C" />
        ) : (
          <>
            <Button title="Selecionar da Galeria" onPress={pickImage} />
            <Button title="Tirar Foto Agora" onPress={takePhoto} />
            <Button title="Salvar e Voltar" onPress={handleSave} />
          </>
        )}
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
