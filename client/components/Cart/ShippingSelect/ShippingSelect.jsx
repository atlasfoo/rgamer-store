import Link from "next/link";
import * as addressApi from "../../../api/address";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const ShippingSelect = () => {
  const [addresses, setAddresses] = useState(null);
  const { session, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await addressApi.getAll(session.user_id, logout);
      setAddresses(response || []);
    })();
  }, []);
  return <div>Direccion de envio</div>;
};

export default ShippingSelect;
