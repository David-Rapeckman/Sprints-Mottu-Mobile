import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../styles/colors';

const FooterTabs = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Location')}>
        <Ionicons name="location" size={24} color={colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Vehicles')}>
        <Ionicons name="bicycle" size={24} color={colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person" size={24} color={colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Ionicons name="settings" size={24} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.lightGray,
  },
});

export default FooterTabs;