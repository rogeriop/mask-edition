import React, { useState } from 'react';
import './App.css';
import InputMask from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

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
// 
const InputCel = (props) => {
  const mask = ['(', /\d/, /\d/, ')', ' ', /\d/, '.', /[8-9]/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/,  /\d/]
  return (<InputMask guide mask={mask} {...props}
  />)

}
// 
const InputBRL = (props) => {
  const mask = createNumberMask({
    prefix: 'R$',
    sufix: '',
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    requireDecimal: true
  })
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
      <InputBRL />
    </div>
  );
}

export default App;
