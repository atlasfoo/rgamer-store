import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const ChangeNameForm = ({user}) => {
  return (
    <div className='change-name-form'>
      <h4>Cambia tu nombre y apellidos</h4>
      <Form>
        <Form.Group widths='equal'>
          <Form.Input name='name' placeholder='Tu nuevo nombre' value={user?.name}/>
          <Form.Input name='name' placeholder='Tu nuevo nombre' value={user?.lastname}/>
        </Form.Group>
        <Button className='submit'>Actualizar</Button>
      </Form>
    </div>
  )
}

export default ChangeNameForm
