import { useFormik } from "formik";
import React from "react";
import { Form, Button } from "semantic-ui-react";
import { initalValues, validationSchema } from "./LoginFormValues";



export default function LoginForm({showRegisterForm}) {
  
  const onSubmit = data => {
    console.log(data);
  }
  
  const { handleChange, handleSubmit, errors } = useFormik({initialValues: initalValues, validationSchema: validationSchema, onSubmit: onSubmit});


  return (
    <Form className='login-form' onSubmit={handleSubmit}>
      <Form.Input name='identifier' onChange={handleChange} error={errors.identifier} type='text' placeholder='Correo electr&oacute;nico'/>
      <Form.Input name='password' onChange={handleChange} error={errors.password} type='password' placeholder='Contrase&ntilde;a'/>
      
      <div className="actions">
        <Button type='button' basic onClick={showRegisterForm}>
          Registrarse
        </Button>
        <div>
          <Button className='submit' type='submit'>Entrar</Button>
          <Button type='button'>¿Has olvidado la contraseña?</Button>
        </div>
      </div>
    </Form>
  );
}
