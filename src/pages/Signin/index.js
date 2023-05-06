import React, { useState } from 'react';
import { View } from 'react-native';
import Botao from '../../components/Button';
import { EntradaTexto } from '../../components/Text';
import estilos from './estilos';
import { accountValidation } from '../../services/firebase'

export default function Signin({ navigation }) {
  const validateAccount = () => {
    accountValidation(email, senha).then(res => {
      console.log(res)
      navigation.navigate('Principal')
    }).catch(err => {
      console.error(err)
    })
  }

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={estilos.container}>
      <EntradaTexto 
        label="E-mail"
        value={email}
        onChangeText={texto => setEmail(texto)}
      />
      <EntradaTexto
        label="Senha"
        value={senha}
        onChangeText={texto => setSenha(texto)}
        secureTextEntry
      />
      
      <Botao onPress={validateAccount}>LOGAR</Botao>
      <Botao 
        onPress={() => { navigation.navigate('Cadastro') }}
      >
        CADASTRAR USUÁRIO
      </Botao>
    </View>
  );
}
