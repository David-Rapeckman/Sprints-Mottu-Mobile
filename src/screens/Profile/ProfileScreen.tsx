// src/screens/Profile/ProfileScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = ({ navigation }: any) => {
  const { user, signOut } = useAuth();
  const goToEdit = () => navigation.navigate('EditProfileScreen');

  const [storedPhone, setStoredPhone] = useState('');
  const [storedGender, setStoredGender] = useState('');
  const [storedBirthday, setStoredBirthday] = useState('');
  const [storedEmail, setStoredEmail] = useState('');
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const phone = await AsyncStorage.getItem('profile_phone');
      const gender = await AsyncStorage.getItem('profile_gender');
      const birthday = await AsyncStorage.getItem('profile_birthdate');
      const email = await AsyncStorage.getItem('profile_email');
      const photo = await AsyncStorage.getItem('profile_photo_url');

      if (phone) setStoredPhone(phone);
      if (gender) setStoredGender(gender);
      if (birthday) {
        const date = new Date(birthday);
        const formatted = `${String(date.getDate()).padStart(2, '0')}/${String(
          date.getMonth() + 1
        ).padStart(2, '0')}/${date.getFullYear()}`;
        setStoredBirthday(formatted);
      }
      if (email) setStoredEmail(email);
      if (photo) setPhotoUrl(photo);
    };

    const unsubscribe = navigation.addListener('focus', loadData);
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>

      <View style={styles.avatarWrapper}>
        <Image
          source={
            photoUrl
              ? { uri: photoUrl }
              : require('../../../assets/icon.png')
          }
          style={styles.avatar}
        />
        <TouchableOpacity
          style={styles.editIcon}
          onPress={() => navigation.navigate('ChangePhotoScreen')}
        >
          <Ionicons name="pencil" size={16} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.name}>{user?.name || 'Administrador'}</Text>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Phone :</Text>
        <Text style={styles.value}>{storedPhone || user?.phone || '(+44) 20 1234 5689'}</Text>
        <TouchableOpacity onPress={goToEdit}>
          <Ionicons name="pencil" size={16} color="#000" style={styles.iconEdit} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Gender :</Text>
        <Text style={styles.value}>{storedGender || user?.gender || 'Homem'}</Text>
        <TouchableOpacity onPress={goToEdit}>
          <Ionicons name="pencil" size={16} color="#000" style={styles.iconEdit} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Birthday :</Text>
        <Text style={styles.value}>{storedBirthday || user?.birthdate || '01/01/1990'}</Text>
        <TouchableOpacity onPress={goToEdit}>
          <Ionicons name="pencil" size={16} color="#000" style={styles.iconEdit} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Email :</Text>
        <Text style={styles.value}>{storedEmail || user?.email || 'admin@gmail.com'}</Text>
        <TouchableOpacity onPress={goToEdit}>
          <Ionicons name="pencil" size={16} color="#000" style={styles.iconEdit} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={goToEdit}>
        <Text style={styles.editButtonText}>Alterar informações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 100,
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
  avatarWrapper: {
    alignItems: 'center',
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#eaeaea',
  },
  editIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#54B12C',
    borderRadius: 12,
    padding: 6,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 24,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    width: '90%',
  },
  label: {
    fontWeight: 'bold',
    width: 90,
    fontSize: 15,
    color: '#555',
  },
  value: {
    flex: 1,
    fontSize: 15,
    color: '#222',
  },
  iconEdit: {
    marginLeft: 8,
  },
  editButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 30,
    width: '90%',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#FDECEC',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 16,
    width: '90%',
  },
  logoutButtonText: {
    color: '#E53935',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
});
