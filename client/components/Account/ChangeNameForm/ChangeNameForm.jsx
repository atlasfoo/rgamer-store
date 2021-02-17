import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { toast } from "react-toastify";

import { initalValues, validationSchema } from "./ChangeNameFormValues";
import * as userApi from "../../../api/user";

const ChangeNameForm = ({ user, logout, setReloadUser }) => {
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    setLoading(true);
    const response = await userApi.updateNames(user.id, data, logout);
    if (!response) {
      toast.error("Error al actualizar nombre y apellidos");
    } else {
      setReloadUser(true);
      toast.success("¡Nombre actualizado!");
    }
    setLoading(false);
  }

  const { handleChange, handleSubmit, errors, values } = useFormik({
    initialValues: initalValues(user?.name, user?.lastname),
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <div className="change-name-form">
      <h4>Cambia tu nombre y apellidos</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            name="name"
            placeholder="Tu nuevo nombre"
            onChange={handleChange}
            value={values.name}
            error={errors.name}
          />
          <Form.Input
            name="lastname"
            placeholder="Tu nuevo apellido"
            onChange={handleChange}
            value={values.lastname}
            error={errors.lastname}
          />
        </Form.Group>
        <Button className="submit" type='submit' loading={loading}>
          Actualizar
        </Button>
      </Form>
    </div>
  );
};

export default ChangeNameForm;
