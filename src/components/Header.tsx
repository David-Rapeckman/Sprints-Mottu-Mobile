import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';
import { metrics } from '../styles/metrics';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: metrics.padding,
    alignItems: 'center',
  },
  title: {
    color: colors.green,
    fontSize: fonts.size.title,
    fontWeight: 'bold',
  },
});

export default Header;
