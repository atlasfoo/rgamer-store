import React from "react";
import { Form, Button } from "semantic-ui-react";

const AddressForm = () => {
  return (
    <Form>
      <Form.Input
        name="title"
        type="text"
        label="Título de la dirección"
        placeholder="Título de la dirección"
      />
      <Form.Group widths="equal">
        <Form.Input
          name="name"
          type="text"
          label="Nombre y apellidos"
          placeholder="Nombre y apellidos"
        />
        <Form.Input
          name="address"
          type="text"
          label="Dirección"
          placeholder="Dirección"
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="city"
          type="text"
          label="Ciudad"
          placeholder="Ciudad"
        />
        <Form.Input
          name="state"
          type="text"
          label="Estado/Provincia"
          placeholder="Estado/Provincia"
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="postalCode"
          type="text"
          label="C&oacute;digo Postal"
          placeholder="C&oacute;digo Postal"
        />
        <Form.Input
          name="phone"
          type="text"
          label="N&uacute;mero de tel&eacute;fono"
          placeholder="N&uacute;mero de t&eacute;lefono"
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
