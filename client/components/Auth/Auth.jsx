import React, { useState } from "react";
import { LoginForm, RegisterForm } from "./Forms";

export default function Auth({ onCloseModal, setTitleModal }) {
  const [showLogin, setShowLogin] = useState(true);

  const showLoginForm = () => {
    setTitleModal("Inciar sesión");
    setShowLogin(true);
  };
  const showRegisterForm = () => {
    setTitleModal("Registrar nuevo usuario");
    setShowLogin(false);
  };

  return showLogin ? (
    <LoginForm showRegisterForm={showRegisterForm} />
  ) : (
    <RegisterForm showLoginForm={showLoginForm} />
  );
}
