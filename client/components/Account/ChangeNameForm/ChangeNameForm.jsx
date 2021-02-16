import { useFormik } from "formik";
import React from "react";
import { Button, Form } from "semantic-ui-react";
import { initalValues, validationSchema } from "./ChangeNameFormValues";

const ChangeNameForm = ({ user }) => {

  function onSubmit(data) {
    console.log(data);
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
        <Button className="submit">Actualizar</Button>
      </Form>
    </div>
  );
};

export default ChangeNameForm;
