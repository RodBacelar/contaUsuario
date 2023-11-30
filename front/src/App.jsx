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
        icon='user'
      />

      <InputFull 
        id='email' 
        label='Email' 
        type='text'
        icon='envelope'
      />

      <InputFull 
        id='senha' 
        label='Senha' 
        type='password'
        icon='lock-alt'
      />
    </>
  )
}

export default App
