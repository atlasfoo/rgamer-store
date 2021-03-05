import Link from "next/link";
import * as addressApi from "../../../api/address";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { map, size } from "lodash";
import { Grid } from "semantic-ui-react";

const ShippingSelect = () => {
  const [addresses, setAddresses] = useState(null);
  const { session, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await addressApi.getAll(session.user_id, logout);
      setAddresses(response || []);
    })();
  }, []);

  console.log(addresses);

  return (
    <div className="shipping-select">
      <div className="title">Direcci&oacute;n de env&iacute;o</div>
      <div className="data">
        {size(addresses) === 0 ? (
          <h3>
            No hay ninguna direccion creada
            <Link href="/account">
              <a>Añadir tu primera direcci&oacute;n</a>
            </Link>
          </h3>
        ) : (
          <Grid>
            {map(addresses, (address) => (
              <Grid.Column key={address.id} mobile={16} tablet={8} computer={4}>
                <AddressCard address={address}/>
              </Grid.Column>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
};

function AddressCard({address}){
  return(
    <div className="address">
      <p>{address.title}</p>
      <p>{address.name}</p>
      <p>{address.address}</p>
      <p>{address.city}, {address.state}, {address.postalCode}</p>
      <p>{address.phone}</p>
    </div>
  )
}

export default ShippingSelect;
