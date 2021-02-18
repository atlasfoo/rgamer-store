import { useFormik } from "formik";
import React from "react";
import { Form, Button } from "semantic-ui-react";
import { initialValues, validationSchema } from "./AddressFormValues";

const AddressForm = () => {

  const onSubmit = (data) => {
    console.log(data);
  }

  const { handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        name="title"
        type="text"
        label="Título de la dirección"
        placeholder="Título de la dirección"
        onChange={handleChange}
        error={errors.title}
      />
      <Form.Group widths="equal">
        <Form.Input
          name="name"
          type="text"
          label="Nombre y apellidos"
          placeholder="Nombre y apellidos"
          onChange={handleChange}
          error={errors.name}
        />
        <Form.Input
          name="address"
          type="text"
          label="Dirección"
          placeholder="Dirección"
          onChange={handleChange}
          error={errors.address}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="city"
          type="text"
          label="Ciudad"
          placeholder="Ciudad"
          onChange={handleChange}
          error={errors.city}
        />
        <Form.Input
          name="state"
          type="text"
          label="Estado/Provincia"
          placeholder="Estado/Provincia"
          onChange={handleChange}
          error={errors.state}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="postalCode"
          type="text"
          label="C&oacute;digo Postal"
          placeholder="C&oacute;digo Postal"
          onChange={handleChange}
          error={errors.postalCode}
        />
        <Form.Input
          name="phone"
          type="text"
          label="N&uacute;mero de tel&eacute;fono"
          placeholder="N&uacute;mero de t&eacute;lefono"
          onChange={handleChange}
          error={errors.phone}
        />
      </Form.Group>
      <div className="actions">
        <Button className="submit" type="submit">
          Crear direcci&oacute;n
        </Button>
      </div>
    </Form>
  );
};

export default AddressForm;
