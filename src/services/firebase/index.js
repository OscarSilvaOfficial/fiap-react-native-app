import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from './configs'

export async function cadastrar(email, senha, confirmaSenha) {
  const auth = getAuth(app)
  return createUserWithEmailAndPassword(auth, email, senha)
}

export async function accountValidation(email, senha) {
  const auth = getAuth(app)
  return signInWithEmailAndPassword(auth, email, senha)
}