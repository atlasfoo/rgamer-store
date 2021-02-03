import React, {useState} from 'react'
import { LoginForm, RegisterForm } from './Forms';

export default function Auth({onCloseModal}) {

  const [showLogin, setShowLogin] = useState(true);


  return showLogin? <LoginForm/> : <RegisterForm/>
  
}
