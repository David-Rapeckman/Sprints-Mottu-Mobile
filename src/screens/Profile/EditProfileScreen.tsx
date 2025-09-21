// (mantive tudo e adicionei apenas feedback sutil após salvar)
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Platform,
  Pressable,
  Modal,
  Alert, // ADICIONADO
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const EditProfileScreen = ({ navigation }: any) => {
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('Masculino');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorModal, setShowErrorModal] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      const p = await AsyncStorage.getItem('profile_phone');
      const g = await AsyncStorage.getItem('profile_gender');
      const e = await AsyncStorage.getItem('profile_email');
      const b = await AsyncStorage.getItem('profile_birthdate');

      if (p) setPhone(p);
      if (g) setGender(g);
      if (e) setEmail(e);
      if (b) setBirthDate(new Date(b));
    };
    loadProfile();
  }, []);

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 11);
    const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
    if (!match) return value;
    const [, ddd, prefix, suffix] = match;
    let result = '';
    if (ddd) result += `(${ddd}`;
    if (ddd.length === 2) result += ') ';
    if (prefix) result += prefix;
    if (prefix.length === 5) result += '-';
    if (suffix) result += suffix;
    return result;
  };

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const validatePhone = (value: string) => value.trim() !== '' && /^\(\d{2}\) \d{5}-\d{4}$/.test(value);
  const validateEmail = (value: string) => value.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSave = async () => {
    if (!validatePhone(phone)) {
      setErrorMessage('Telefone inválido. Use o formato (99) 99999-9999.');
      setShowErrorModal(true);
      return;
    }
    if (!['Masculino', 'Feminino', 'Outro'].includes(gender)) {
      setErrorMessage('Gênero inválido. Escolha entre Masculino, Feminino ou Outro.');
      setShowErrorModal(true);
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('E-mail inválido. Verifique o formato.');
      setShowErrorModal(true);
      return;
    }

    try {
      await AsyncStorage.setItem('profile_phone', phone);
      await AsyncStorage.setItem('profile_gender', gender);
      await AsyncStorage.setItem('profile_email', email);
      await AsyncStorage.setItem('profile_birthdate', birthDate.toISOString());
      Alert.alert('Sucesso', 'Perfil atualizado com sucesso.'); // ADICIONADO
      navigation.navigate('MainApp', { screen: 'VehiclesList' });
    } catch {
      setErrorMessage('Erro ao salvar os dados.');
      setShowErrorModal(true);
    }
  };

  const onChangeDate = (_event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) setBirthDate(selectedDate);
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Telefone (99) 99999-9999"
        value={phone}
        onChangeText={(text) => setPhone(formatPhone(text))}
        keyboardType="phone-pad"
        maxLength={15}
      />

      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue: string) => setGender(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
          <Picker.Item label="Outro" value="Outro" />
        </Picker>
      </View>

      <Pressable style={styles.input} onPress={() => setShowDatePicker(true)}>
        <Text style={{ color: '#333' }}>{birthDate ? formatDate(birthDate) : 'Selecionar data'}</Text>
      </Pressable>
      {showDatePicker && (
        <DateTimePicker
          value={birthDate}
          mode="date"
          display="default"
          onChange={onChangeDate}
          maximumDate={new Date()}
        />
      )}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.buttonGroup}>
        <Button title="Salvar Alterações" onPress={handleSave} />
        <Button title="Cancelar" color="#888" onPress={handleCancel} />
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={showErrorModal}
        onRequestClose={() => setShowErrorModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Erro</Text>
            <Text style={styles.modalOptionText}>{errorMessage}</Text>

            <Pressable
              style={[styles.modalOption, styles.modalCancel]}
              onPress={() => setShowErrorModal(false)}
            >
              <Text style={[styles.modalOptionText, { color: 'red' }]}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EditProfileScreen;

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
    zIndex: 1,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  pickerWrapper: {
    width: '100%',
    borderWidth: Platform.OS === 'android' ? 1 : 0,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 15,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
    height: 50,
  },
  buttonGroup: {
    width: '100%',
    marginTop: 20,
    gap: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '80%',
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    color: '#E53935',
  },
  modalOption: {
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
  },
  modalOptionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  modalCancel: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
