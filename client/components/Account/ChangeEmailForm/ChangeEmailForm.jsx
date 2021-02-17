import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { toast } from "react-toastify";

import { initalValues, validationSchema } from "./ChangeEmailFormValues";
import * as userApi from "../../../api/user";

const ChangeEmailForm = ({ user, logout, setReloadUser }) => {
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    console.log(data);
    const response = await userApi.updateEmail(user.id, data.email, logout);
    if (!response) {
      toast.error("Error al actualizar email");
    } else if (response?.statusCode == 400) {
      toast.error("Este email ya esta ocupado");
    } else {
      setReloadUser(true);
      toast.success("Email actualizado!");
      handleReset();
    }
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
      <div className="change-email-form">
        <h4>
          Cambia tu Correo <span>(Tu correo actual {user?.email})</span>
        </h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              name="email"
              placeholder="Tu nuevo correo"
              onChange={handleChange}
              value={values.email}
              error={errors.email}
            />
            <Form.Input
              name="repeatEmail"
              placeholder="Confirma tu nuevo correo"
              onChange={handleChange}
              value={values.repeatEmail}
              error={errors.repeatEmail}
            />
          </Form.Group>
          <Button className="submit" type="submit" loading={loading}>
            Actualizar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ChangeEmailForm;
