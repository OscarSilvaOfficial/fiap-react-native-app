import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Card from '../../components/Card';
import styles from './styles';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <Card nome="Tênis" preco="200,00" />
      <Card nome="Camisa" preco="100,00" />
      <Card nome="Suplementos" preco="150,00" />
     </View>
  );
}
