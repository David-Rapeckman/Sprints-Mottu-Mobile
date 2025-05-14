import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';
import { metrics } from '../styles/metrics';

const Input = (props: TextInputProps) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: metrics.radius,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
    fontSize: fonts.size.medium,
    marginBottom: 12,
  },
});

export default Input;
