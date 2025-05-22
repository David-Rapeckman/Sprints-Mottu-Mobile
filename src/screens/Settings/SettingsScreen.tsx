import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
  Pressable,
  SafeAreaView,
} from 'react-native';

const SettingsScreen = ({ navigation }: any) => {
  const [darkMode, setDarkMode] = useState(false);
  const [muted, setMuted] = useState(false);
  const [customNotifications, setCustomNotifications] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Português');

  const handleSave = () => {
    Alert.alert('Sucesso', 'Configurações salvas com sucesso!');
    navigation.navigate('ProfileScreen');
  };

  const renderLink = (title: string, screen: string) => (
    <TouchableOpacity
      style={styles.linkButton}
      onPress={() => navigation.navigate(screen)}
    >
      <Text style={styles.linkText}>{title}</Text>
    </TouchableOpacity>
  );

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setModalVisible(false);
    Alert.alert('Idioma selecionado', `Você selecionou: ${language}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}></Text>

        <View style={styles.settingItem}>
          <Text style={styles.label}>Linguagem:</Text>
          <TouchableOpacity
            style={styles.selectButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.selectButtonText}>{selectedLanguage}</Text>
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

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Selecione o idioma</Text>

              {['Português', 'Inglês', 'Espanhol', 'Francês'].map((lang) => (
                <Pressable
                  key={lang}
                  style={styles.modalOption}
                  onPress={() => selectLanguage(lang)}
                >
                  <Text style={styles.modalOptionText}>{lang}</Text>
                </Pressable>
              ))}

              <Pressable
                style={[styles.modalOption, styles.modalCancel]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={[styles.modalOptionText, { color: 'red' }]}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
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
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 28,
    color: '#28A745',
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontSize: 16,
    color: '#444',
    flex: 1,
    paddingRight: 12,
  },
  selectButton: {
    backgroundColor: '#28A745',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    minWidth: 140,
    alignItems: 'center',
  },
  selectButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  linksContainer: {
    marginTop: 0,
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
    color: '#28A745',
  },
  modalOption: {
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
  },
  modalOptionText: {
    fontSize: 16,
    color: '#333',
  },
  modalCancel: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
