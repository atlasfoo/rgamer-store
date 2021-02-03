import React from "react";
import { Button, Form } from "semantic-ui-react";

export default function RegisterForm({ showLoginForm }) {
  return (
    <Form>
      <Form.Input name="name" type="text" placeholder="Nombre" />

      <Form.Input name="lastname" type="text" placeholder="Apellidos" />

      <Form.Input name="username" type="text" placeholder="Nombre de Usuario" />
      <Form.Input name="email" type="text" placeholder="Correo" />
      <Form.Input name="password" type="text" placeholder="Contraseña" />

      <div className="actions">
        <Button type='button' basic>
          Iniciar sesi&oacute;n
        </Button>
        <Button type='submit' className='submit'>
          Registrar
        </Button>
      </div>
    </Form>
  );
}
