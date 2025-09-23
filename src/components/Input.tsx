import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';
import { metrics } from '../styles/metrics';

const Input = (props: TextInputProps) => {
  return <TextInput style={styles.input} placeholderTextColor={colors.gray} {...props} />;
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
    // melhoria
    shadowColor: colors.black,
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 1,
  },
});

export default Input;
