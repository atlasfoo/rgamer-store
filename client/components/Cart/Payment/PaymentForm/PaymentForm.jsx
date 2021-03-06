import { CardElement } from '@stripe/react-stripe-js';
import { Button } from 'semantic-ui-react'
import React from 'react'

const PaymentForm = ({products, address}) => {
  
  const handleSubmit = (event) => {
    console.log("realizando pago");
    event.preventDefault();
  }

  return (
    <form className="payment-form">
      <CardElement />
      <Button type='submit'>Pagar</Button>
    </form>
  )
}

export default PaymentForm
