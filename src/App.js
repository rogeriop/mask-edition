import React, { useState } from 'react';
import './App.css';
import InputMask from 'react-text-mask'

const InputCEP = (props) => {
  const mask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
  return (<InputMask guide mask={mask} {...props}
  />)

}
const InputCPF = (props) => {
  const mask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  return (<InputMask guide mask={mask} {...props}
  />)

}
// AAA-0000
const InputPlaca = (props) => {
  const mask = [/[A-Z]/, /[A-Z]/, /[A-Z]/, '-', /\d/, /\d/, /\d/,  /\d/]
  return (<InputMask guide mask={mask} {...props}
  />)

}
// AAA-0000
const InputCel = (props) => {
  const mask = ['(', /\d/, /\d/, ')', ' ', /\d/, '.', /[8-9]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/,  /\d/]
  return (<InputMask guide mask={mask} {...props}
  />)

}
function App() {
  const [cep, setCEP] = useState('')
  const [cpf, setCPF] = useState('')
  return (
    <div className="App">
      <InputCEP onChange={evt => setCEP(evt.target.value)}/>
      CEP: {cep}
      <InputCPF onChange={evt => setCPF(evt.target.value)}/>
      CPF: {cpf}
      <InputPlaca placeholder='AAA-9999'/>
      <InputCel placeholder='(99) 9.9999-9999'/>
    </div>
  );
}

export default App;
