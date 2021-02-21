import { useFormik } from "formik";
import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";

import useAuth from "../../../hooks/useAuth";
import { initialValues, validationSchema } from "./AddressFormValues";
import * as addressService from "../../../api/address";
import { toast } from "react-toastify";
import { FORM_ACTIONS } from "../../../utils/consts";

const AddressForm = ({ setShowModal, setReloadAddress, action, address}) => {
  const [loading, setLoading] = useState(false);

  const { session, logout } = useAuth();

  const onSubmit = (data) => {
    setLoading(true);
    switch(action){
      case FORM_ACTIONS.CREATE:{
        createAddress(data);
        break;
      }
      case FORM_ACTIONS.UPDATE:{
        updateAddress(data);
        break;
      }
      default:
        break;
    }
    setLoading(false);
  };

  const createAddress = async (data) => {
    const formDataTemp = {
      ...data,
      user: session.user_id,
    };
    const response = await addressService.create(formDataTemp, logout);

    if (!response) {
      toast.warning("Error al crear la dirección");
    }else{
      resetForm();
      setReloadAddress(true);
      setShowModal(false);
    }
  };

  const updateAddress = async (data) => {
    const formDataTemp = {
      id: address._id,
      ...data,
      user: session.user_id,
    };
    const response = await addressService.update(formDataTemp.id, formDataTemp, logout);

    if (!response) {
      toast.warning("Error al actualizar la dirección");
    }else{
      toast.success("Se ha actualizado la dirección");
      resetForm();
      setReloadAddress(true);
      setShowModal(false);
    }
  }

  const { handleChange, handleSubmit, errors, resetForm, values } = useFormik({
    initialValues: initialValues(address),
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        name="title"
        type="text"
        label="Título de la dirección"
        placeholder="Título de la dirección"
        onChange={handleChange}
        value={values.title}
        error={errors.title}
      />
      <Form.Group widths="equal">
        <Form.Input
          name="name"
          type="text"
          label="Nombre y apellidos"
          placeholder="Nombre y apellidos"
          onChange={handleChange}
          value={values.name}
          error={errors.name}
        />
        <Form.Input
          name="address"
          type="text"
          label="Dirección"
          placeholder="Dirección"
          onChange={handleChange}
          value={values.address}
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
          value={values.city}
          error={errors.city}
        />
        <Form.Input
          name="state"
          type="text"
          label="Estado/Provincia"
          placeholder="Estado/Provincia"
          onChange={handleChange}
          value={values.state}
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
          value={values.postalCode}
          error={errors.postalCode}
        />
        <Form.Input
          name="phone"
          type="text"
          label="N&uacute;mero de tel&eacute;fono"
          placeholder="N&uacute;mero de t&eacute;lefono"
          onChange={handleChange}
          value={values.phone}
          error={errors.phone}
        />
      </Form.Group>
      <div className="actions">
        <Button className="submit" type="submit" loading={loading}>
          {(action === FORM_ACTIONS.CREATE)? 'Crear' : 'Actualizar'} direcci&oacute;n
        </Button>
      </div>
    </Form>
  );
};

export default AddressForm;
