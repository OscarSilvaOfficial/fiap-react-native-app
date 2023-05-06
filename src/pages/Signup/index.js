import React, { useState } from 'react';
import { View } from 'react-native';
import Botao from '../../components/Button';
import { EntradaTexto } from '../../components/Text';
import estilos from './estilos';
import { cadastrar } from '../../services/firebase';


export default function Signup({ navigation }) {  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  function confirmCreationAccount() {
    if (confirmaSenha !== senha) {
      alert('Confirmação de senho não é igual a senha')
      throw new Error('Password validation')
    }
  }

  async function signup(){
    confirmCreationAccount()
    await cadastrar(email, senha, confirmaSenha);
    setEmail('')
    setSenha('')
    setConfirmaSenha('')
  }

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

      <EntradaTexto
        label="Confirmar Senha"
        value={confirmaSenha}
        onChangeText={texto => setConfirmaSenha(texto)}
        secureTextEntry
      />
      
      <Botao onPress={signup}>CADASTRAR</Botao>
    </View>
  );
}