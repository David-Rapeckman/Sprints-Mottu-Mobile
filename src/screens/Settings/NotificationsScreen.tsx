import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notificações Personalizadas</Text>
      <Text style={styles.text}>
        Aqui você poderá definir regras específicas para notificações, sons, horários e mais.
      </Text>
      <Text style={styles.text}>
        (Funcionalidade em desenvolvimento — personalize conforme sua lógica de backend).
      </Text>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 10 }
});
