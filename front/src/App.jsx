import { useState } from 'react'
import './App.css'
import InputFull from './Usuario/InputFull'

function App() {

  return (
    <>
      <InputFull 
        id='username' 
        label='Username'
        type='text'
        textErro='Aconteceu um Erro'
      />

      <InputFull 
        id='email' 
        label='Email' 
        type='text'
      />

      <InputFull 
        id='senha' 
        label='Senha' 
        type='password'
      />
    </>
  )
}

export default App
