import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const TermsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Termos de Serviço</Text>
      <Text style={styles.text}>
        Ao utilizar este aplicativo, você concorda com todos os termos e condições aqui descritos.
      </Text>
      <Text style={styles.text}>
        Este app coleta e trata dados pessoais conforme a política de privacidade.
        O uso do sistema está sujeito a regras específicas e poderá ser revogado em caso de violação.
      </Text>
      {/* Adicione mais seções conforme necessário */}
    </ScrollView>
  );
};

export default TermsScreen;

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 16, marginBottom: 15, lineHeight: 22 }
});
