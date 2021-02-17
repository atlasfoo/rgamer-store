import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const ChangeEmailForm = ({user, logout, setReloadUser}) => {
  return (
    <div>
      <div className="change-email-form">
      <h4>Cambia tu Correo <span>(Tu correo actual {user?.email})</span></h4>
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
            value={values.email}
            error={errors.email}
          />
        </Form.Group>
        <Button className="submit" loading={loading}>
          Actualizar
        </Button>
      </Form>
    </div>
    </div>
  )
}

export default ChangeEmailForm
