import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelpCenterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Central de Ajuda</Text>
      <Text style={styles.text}>Precisa de suporte? Aqui estão algumas opções:</Text>
      <Text style={styles.item}>• suporte@systrack.com</Text>
      <Text style={styles.item}>• WhatsApp: (11) 99999-9999</Text>
      <Text style={styles.item}>• FAQ disponível em nosso site oficial</Text>
      <Text style={styles.note}>
        Nosso time está disponível de segunda a sexta, das 8h às 18h.
      </Text>
    </View>
  );
};

export default HelpCenterScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 6 },
  note: { marginTop: 20, color: 'gray', fontStyle: 'italic' }
});
