import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';

const ProfileScreen = ({ navigation }: any) => {
  const { user, signOut } = useAuth();

  const goToEdit = () => navigation.navigate('EditProfileScreen');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <View style={styles.avatarWrapper}>
        <Image source={require('../../../assets/icon.png')} style={styles.avatar} />
        <TouchableOpacity style={styles.editIcon} onPress={() => navigation.navigate('ChangePhotoScreen')}>
          <Ionicons name="pencil" size={16} color="#fff" />
        </TouchableOpacity>
      </View>

      <Text style={styles.name}>{user?.name || 'Lorem Ipsum'}</Text>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Phone :</Text>
        <Text style={styles.value}>{user?.phone || '(+44) 20 1234 5689'}</Text>
        <TouchableOpacity onPress={goToEdit}>
          <Ionicons name="pencil" size={16} color="#000" style={styles.iconEdit} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Gender :</Text>
        <Text style={styles.value}>{user?.gender || 'Homem'}</Text>
        <TouchableOpacity onPress={goToEdit}>
          <Ionicons name="pencil" size={16} color="#000" style={styles.iconEdit} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Birthday :</Text>
        <Text style={styles.value}>{user?.birthdate || '12/01/1890'}</Text>
        <TouchableOpacity onPress={goToEdit}>
          <Ionicons name="pencil" size={16} color="#000" style={styles.iconEdit} />
        </TouchableOpacity>
      </View>

      <View style={styles.infoRow}>
        <Text style={styles.label}>Email :</Text>
        <Text style={styles.value}>{user?.email || 'lorem.ipsum@mail.com'}</Text>
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
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#38B000',
    paddingVertical: 12,
    borderRadius: 6,
    marginBottom: 20,
  },
  avatarWrapper: {
    alignSelf: 'center',
    position: 'relative',
    marginBottom: 12,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#38B000',
    borderRadius: 12,
    padding: 6,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontWeight: 'bold',
    width: 90,
    fontSize: 14,
  },
  value: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  iconEdit: {
    marginLeft: 8,
  },
  editButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#FDECEC',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  logoutButtonText: {
    color: '#E53935',
    fontSize: 16,
    textAlign: 'center',
  },
});
