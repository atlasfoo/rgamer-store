import React from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const Payment = ({products, shippingAddress}) => {
  return (
    <div className='payment'>
      <div className="title">Pago</div>
      <div className="data">
        <Elements stripe={stripePromise}>
          <PaymentForm products={products} address={shippingAddress}/>
        </Elements>
      </div>
    </div>
  )
}

export default Payment
