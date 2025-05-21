import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TermsScreen = ({ navigation }: any) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#2e86de" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Termos de Serviço</Text>
      <Text style={styles.text}>
        Ao utilizar este aplicativo, você concorda com todos os termos e condições aqui descritos.
      </Text>
      <Text style={styles.text}>
        Este app coleta e trata dados pessoais conforme a política de privacidade.
        O uso do sistema está sujeito a regras específicas e poderá ser revogado em caso de violação.
      </Text>
    </ScrollView>
  );
};

export default TermsScreen;

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  backButton: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  backText: { marginLeft: 8, fontSize: 16, color: '#2e86de' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 15, lineHeight: 22 }
});
