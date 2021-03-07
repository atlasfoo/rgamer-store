import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "semantic-ui-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { paymentCart } from "../../../../api/cart";
import useAuth from "../../../../hooks/useAuth";
import { size } from "lodash";

const PaymentForm = ({ products, address }) => {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { session, logout } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const result = await stripe.createToken(cardElement);

    if (result.error) {
      toast.error(result.error.message);
    } else {
      console.log(result);
      const response = await paymentCart(result.token, products, session.user_id, address, logout);
      if(size(response) > 0) {
        toast.success("Pedido Completado");
      }else{
        toast.error("No se ha podido realizar el pedido");
      }
    }

    setLoading(false);
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <CardElement />
      <Button type="submit" loading={loading} disabled={!stripe}>
        Pagar
      </Button>
    </form>
  );
};

export default PaymentForm;
