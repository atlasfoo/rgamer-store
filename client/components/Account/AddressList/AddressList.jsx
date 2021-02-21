import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import * as addressService from "../../../api/address";
import _ from "lodash";
import { Button, Grid } from "semantic-ui-react";

const AddressList = ({reloadAddress, setReloadAddress}) => {
  const [addresses, setAddresses] = useState(null);

  const { session, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await addressService.getAll(session.user_id, logout);
      setAddresses(response || []);
      setReloadAddress(false);
    })();
  }, [session, logout, reloadAddress]);

  return (
    <article className="list-address">
      {_.size(addresses) === 0 ? (
        <h3>No hay direcciones guardadas</h3>
      ) : (
        <Grid>
          {_.map(addresses, (address) => (
            <Grid.Column key={address.id} mobile={16} tablet={8} computer={4}>
              <Address address={address} />
            </Grid.Column>
          ))}
        </Grid>
      )}
    </article>
  );
};

function Address({ address }) {
  return (
    <div className="address">
      <p>{address.title}</p>
      <p>{address.name}</p>
      <p>{address.address}</p>
      <p>{address.state}, {address.city}, {address.postalCode}</p>
      <p>{address.phone}</p>
      <div className="actions">
        <Button primary>Editar</Button>
        <Button>Eliminar</Button>
      </div>
    </div>
  )
}

export default AddressList;
