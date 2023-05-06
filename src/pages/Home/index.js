import React from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Produto from '../../components/Products';
import styles from './styles';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <Produto nome="Tênis" preco="200,00" />
      <Produto nome="Camisa" preco="100,00" />
      <Produto nome="Suplementos" preco="150,00" />
     </View>
  );
}
