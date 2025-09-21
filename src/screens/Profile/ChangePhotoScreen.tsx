// (mantive tudo e transformei em upload funcional via Cloudinary por URL + salva no AsyncStorage)
import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, Alert, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CLOUD_NAME = 'dawxgqnfj'; // ADICIONADO
const UPLOAD_PRESET = 'perfil_unsigned'; // ADICIONADO (crie este preset unsigned no painel)

const ChangePhotoScreen = ({ navigation }: any) => {
  const [imageUrl, setImageUrl] = useState(''); // ADICIONADO
  const [uploading, setUploading] = useState(false); // ADICIONADO

  const handleSelectGallery = () => {
    alert('Selecionar da galeria (não implementado)');
  };

  const handleTakePhoto = () => {
    alert('Abrir câmera (não implementado)');
  };

  const uploadToCloudinary = async (url: string) => { // ADICIONADO
    const endpoint = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const data = new FormData();
    data.append('file', url);
    data.append('upload_preset', UPLOAD_PRESET);

    const res = await fetch(endpoint, { method: 'POST', body: data });
    const json = await res.json();
    if (!json.secure_url) throw new Error('Falha no upload.');
    return json.secure_url as string;
  };

  const handleSave = async () => {
    try {
      setUploading(true);
      let finalUrl = imageUrl && imageUrl.trim().length > 0 ? imageUrl.trim() : '';
      if (!finalUrl) {
        Alert.alert('Atenção', 'Cole uma URL de imagem para enviar.');
        setUploading(false);
        return;
      }
      const secureUrl = await uploadToCloudinary(finalUrl);
      await AsyncStorage.setItem('@profile_avatar', secureUrl);
      Alert.alert('Foto Atualizada', 'A imagem foi alterada e salva no perfil.');
      navigation.navigate('ProfileScreen');
    } catch (e: any) {
      Alert.alert('Erro', e?.message || 'Não foi possível atualizar a foto.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Change Photo</Text>
      </View>
      <Image
        source={require('../../../assets/icon.png')}
        style={styles.image}
      />

      {/* ADICIONADO: campo para colar uma URL de imagem a ser enviada ao Cloudinary */}
      <TextInput
        style={styles.input}
        placeholder="Cole aqui a URL de uma imagem (jpg/png)"
        autoCapitalize="none"
        autoCorrect={false}
        value={imageUrl}
        onChangeText={setImageUrl}
      />

      <View style={styles.buttons}>
        <Button title="Selecionar da Galeria" onPress={handleSelectGallery} />
        <Button title="Tirar Foto Agora" onPress={handleTakePhoto} />
        <Button title={uploading ? 'Enviando...' : 'Salvar e Voltar'} onPress={handleSave} disabled={uploading} />
      </View>
    </KeyboardAvoidingView>
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
  input: { // ADICIONADO
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  buttons: {
    width: '100%',
    gap: 12,
  },
});
