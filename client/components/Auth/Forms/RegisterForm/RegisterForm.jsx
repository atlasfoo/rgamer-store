import React from "react";

export default function RegisterForm({showLoginForm}) {
  return (
    <div>
      <h3>Formulario de registro</h3>
      <button onClick={showLoginForm}>Ir al Login</button>
    </div>
  )
}
