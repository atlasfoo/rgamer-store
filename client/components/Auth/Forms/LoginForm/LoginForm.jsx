import { useFormik } from "formik";
import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { initalValues, validationSchema } from "./LoginFormValues";

import * as UserApi from "../../../../api/user";
import { toast } from "react-toastify";

export default function LoginForm({ showRegisterForm, onCloseModal }) {
  const onSubmit = async (data) => {
    setLoading(true);
    const response = await UserApi.login(data);
    console.log(response);
    if(response?.jwt){
      console.log("Si");
      onCloseModal();
    } else {
      toast.error("Usuario o contraseña incorrecta");
    }
    setLoading(false);
  };

  const [loading, setLoading] = useState(false);

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: initalValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <Form.Input
        name="identifier"
        onChange={handleChange}
        error={errors.identifier}
        type="text"
        placeholder="Correo electr&oacute;nico"
      />
      <Form.Input
        name="password"
        onChange={handleChange}
        error={errors.password}
        type="password"
        placeholder="Contrase&ntilde;a"
      />

      <div className="actions">
        <Button type="button" basic onClick={showRegisterForm}>
          Registrarse
        </Button>
        <div>
          <Button className="submit" type="submit" loading={loading}>
            Entrar
          </Button>
          <Button type="button">¿Has olvidado la contraseña?</Button>
        </div>
      </div>
    </Form>
  );
}
