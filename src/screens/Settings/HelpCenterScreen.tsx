import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HelpCenterScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#2e86de" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

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
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  backButton: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  backText: { marginLeft: 8, fontSize: 16, color: '#2e86de' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 6 },
  note: { marginTop: 20, color: 'gray', fontStyle: 'italic' }
});
