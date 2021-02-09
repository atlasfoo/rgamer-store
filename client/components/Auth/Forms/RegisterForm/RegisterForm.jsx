import { useFormik } from "formik";
import React from "react";
import { Button, Form } from "semantic-ui-react";

import * as UserApi from '../../../../api/user';

import RegisterValidationSchema from "./RegisterValidationSchema";

const initialValues = {
  name: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
};

export default function RegisterForm({ showLoginForm }) {
  const onSubmit = (data) => {
    UserApi.create(data);
  };

  // Formik Hooks
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues,
    validationSchema: RegisterValidationSchema,
    onSubmit: onSubmit,
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        name="name"
        type="text"
        placeholder="Nombre"
        onChange={handleChange}
        error={errors.name}
      />

      <Form.Input
        name="lastname"
        type="text"
        placeholder="Apellidos"
        onChange={handleChange}
        error={errors.lastname}
      />

      <Form.Input
        name="username"
        type="text"
        placeholder="Nombre de Usuario"
        onChange={handleChange}
        error={errors.username}
      />

      <Form.Input
        name="email"
        type="email"
        placeholder="Correo"
        onChange={handleChange}
        error={errors.email}
      />

      <Form.Input
        name="password"
        type="text"
        placeholder="Contraseña"
        onChange={handleChange}
        error={errors.password}
      />

      <div className="actions">
        <Button type="button" basic>
          Iniciar sesi&oacute;n
        </Button>
        <Button type="submit" className="submit">
          Registrar
        </Button>
      </div>
    </Form>
  );
}
