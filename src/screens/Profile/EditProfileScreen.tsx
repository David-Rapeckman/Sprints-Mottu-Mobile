import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const EditProfileScreen = ({ navigation }: any) => {
  const [phone, setPhone] = useState('(11) 98765-4321');
  const [gender, setGender] = useState('Masculino');
  const [birthday, setBirthday] = useState('01/01/2000');

  const handleSave = () => {
    Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Gênero"
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        style={styles.input}
        placeholder="Aniversário"
        value={birthday}
        onChangeText={setBirthday}
      />

      <Button title="Salvar Alterações" onPress={handleSave} />
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 6
  }
});
