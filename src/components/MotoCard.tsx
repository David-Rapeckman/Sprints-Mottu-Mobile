import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';
import { metrics } from '../styles/metrics';

interface MotoCardProps {
  modelo: string;
  status: string;
  user: string;
  image: string;
  onPress: () => void;
}

const MotoCard: React.FC<MotoCardProps> = ({ modelo, status, user, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.modelo}>{modelo}</Text>
        <Text style={styles.text}>Status: {status}</Text>
        {user ? <Text style={styles.text}>Usuário: {user}</Text> : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: metrics.radius,
    padding: 12,
    marginBottom: 12,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  modelo: {
    fontSize: fonts.size.large,
    fontWeight: 'bold',
    color: colors.primary,
  },
  text: {
    fontSize: fonts.size.medium,
    color: colors.gray,
    marginTop: 4,
  },
});

export default MotoCard;
