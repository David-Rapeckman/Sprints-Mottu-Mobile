import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { fonts } from './fonts';
import { metrics } from './metrics';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: metrics.padding,
  },
  title: {
    fontSize: fonts.size.title,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10,
  },
  text: {
    fontSize: fonts.size.medium,
    color: colors.dark,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: metrics.radius,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    fontSize: fonts.size.medium,
    marginBottom: 12,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: metrics.radius,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: fonts.size.medium,
    fontWeight: 'bold',
  },
});
