import { useFormik } from "formik";
import React, {useState} from "react";
import { toast } from "react-toastify";
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

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await UserApi.create(data);
    
    console.log(response);

    if(response?.jwt){
      showLoginForm();
    }else{
      toast.error("Error al registrar el usuario");
    }

    setLoading(false);
  };

  // Formik Hooks
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues,
    validationSchema: RegisterValidationSchema,
    onSubmit: onSubmit,
  });

  const [loading, setLoading] = useState(false)

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
        type="password"
        placeholder="Contraseña"
        onChange={handleChange}
        error={errors.password}
      />

      <div className="actions">
        <Button type="button" basic onClick={showLoginForm}>
          Iniciar sesi&oacute;n
        </Button>
        <Button type="submit" className="submit" loading={loading}>
          Registrar
        </Button>
      </div>
    </Form>
  );
}
