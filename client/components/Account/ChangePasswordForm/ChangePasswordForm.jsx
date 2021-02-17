import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { toast } from "react-toastify";

import { initalValues, validationSchema } from "./ChangePasswordFormValues";
import * as userApi from "../../../api/user";

const ChangePasswordForm = () => {
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    console.log(data);
    /* console.log(data);
    const response = await userApi.updateEmail(user.id, data.email, logout);
    if (!response) {
      toast.error("Error al actualizar contraseña");
    } else if (response?.statusCode == 400) {
      toast.error("Error al actualizar contraseña");
    } else {
      setReloadUser(true);
      toast.success("Contraseña actualizada!");
      handleReset();
    } */
    setLoading(false);
  }

  const { handleChange, handleSubmit, handleReset, errors, values } = useFormik(
    {
      initialValues: initalValues,
      validationSchema: validationSchema,
      onSubmit: onSubmit,
    }
  );

  return (
    <div>
      <div className="change-password-form">
        <h4>
          Cambia tu Contraseña
        </h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              name="password"
              placeholder="Tu nueva contraseña"
              onChange={handleChange}
              value={values.password}
              error={errors.password}
              type='password'
            />
            <Form.Input
              name="repeatPassword"
              placeholder="Confirma tu nueva contraseña"
              onChange={handleChange}
              value={values.repeatPassword}
              error={errors.repeatPassword}
              type='password'
            />
          </Form.Group>
          <Button className="submit" type="submit" loading={loading}>
            Actualizar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ChangePasswordForm
