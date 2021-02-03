import React from "react";

export default function LoginForm({showRegisterForm}) {
  return (
    <div>
      <h3>Formulario de Login</h3>
      <button onClick={showRegisterForm}>Ir al registro</button>
    </div>
  );
}
