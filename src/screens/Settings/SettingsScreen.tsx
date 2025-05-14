import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }: any) => {
  const [darkMode, setDarkMode] = useState(false);
  const [muted, setMuted] = useState(false);
  const [customNotifications, setCustomNotifications] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <View style={styles.settingItem}>
        <Text>Linguagem:</Text>
        <Button title="Selecionar idioma" onPress={() => alert('Seleção de idioma')} />
      </View>

      <View style={styles.settingItem}>
        <Text>Modo escuro:</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <View style={styles.settingItem}>
        <Text>Mutar notificações:</Text>
        <Switch value={muted} onValueChange={setMuted} />
      </View>

      <View style={styles.settingItem}>
        <Text>Notificações personalizadas:</Text>
        <Switch value={customNotifications} onValueChange={setCustomNotifications} />
      </View>

      <View style={styles.links}>
        <Button title="Termos de Serviço" onPress={() => navigation.navigate('TermsScreen')} />
        <Button title="Sobre o App" onPress={() => navigation.navigate('AboutAppScreen')} />
        <Button title="Central de Ajuda" onPress={() => navigation.navigate('HelpCenterScreen')} />
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  settingItem: {
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  links: {
    marginTop: 30,
    gap: 10
  }
});
