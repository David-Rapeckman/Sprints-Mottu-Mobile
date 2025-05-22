import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const SettingsScreen = ({ navigation }: any) => {
  const [darkMode, setDarkMode] = useState(false);
  const [muted, setMuted] = useState(false);
  const [customNotifications, setCustomNotifications] = useState(true);

  const handleSave = () => {
    Alert.alert('Sucesso', 'Configurações salvas com sucesso!');
    navigation.navigate('ProfileScreen'); // Navega para ProfileScreen
  };

  const renderLink = (title: string, screen: string) => (
    <TouchableOpacity
      style={styles.linkButton}
      onPress={() => navigation.navigate(screen)}
    >
      <Text style={styles.linkText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Linguagem:</Text>
        <TouchableOpacity
          style={styles.selectButton}
          onPress={() => Alert.alert('Selecionar idioma', 'Funcionalidade não implementada')}
        >
          <Text style={styles.selectButtonText}>Selecionar idioma</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Modo escuro:</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Mutar notificações:</Text>
        <Switch value={muted} onValueChange={setMuted} />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.label}>Notificações personalizadas:</Text>
        <Switch value={customNotifications} onValueChange={setCustomNotifications} />
      </View>

      <View style={styles.linksContainer}>
        {renderLink('Termos de Serviço', 'TermsScreen')}
        {renderLink('Sobre o App', 'AboutAppScreen')}
        {renderLink('Central de Ajuda', 'HelpCenterScreen')}
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 30,
    color: '#28A745',
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#444',
    flex: 1,
  },
  selectButton: {
    backgroundColor: '#28A745',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  selectButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  linksContainer: {
    marginTop: 40,
  },
  linkButton: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  linkText: {
    fontSize: 16,
    color: '#1E90FF',
    fontWeight: '600',
  },
  saveButton: {
    marginTop: 50,
    backgroundColor: '#28A745',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
