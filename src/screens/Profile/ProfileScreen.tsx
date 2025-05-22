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
        <TouchableOpacity
          style={styles.editIcon}
          onPress={() => navigation.navigate('ChangePhotoScreen')}
        >
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
    marginTop: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: '#28A745',
    marginBottom: 30,
  },
  avatarWrapper: {
    alignSelf: 'center',
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
  },
  logoutButtonText: {
    color: '#E53935',
    fontSize: 17,
    fontWeight: '600',
    textAlign: 'center',
  },
});
