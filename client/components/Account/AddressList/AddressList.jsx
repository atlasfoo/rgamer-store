import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import * as addressService from "../../../api/address";
import _ from "lodash";
import { Button, Grid, Icon } from "semantic-ui-react";

const AddressList = ({reloadAddress, setReloadAddress, openModal}) => {
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
              <Address address={address} logout={logout} setReloadAddress={setReloadAddress} openModal={openModal} />
            </Grid.Column>
          ))}
        </Grid>
      )}
    </article>
  );
};

function Address({ address, logout, setReloadAddress, openModal }) {

  const [loadingDelete, setLoadingDelete] = useState(false);

  const deleteAddress = async () => {
    setLoadingDelete(true);
    const response = await addressService.deleteAddress(address._id, logout);
    if(response) setReloadAddress(true);
    setLoadingDelete(false);
  }

  return (
    <div className="address">
      <p>{address.title}</p>
      <p>{address.name}</p>
      <p>{address.address}</p>
      <p>{address.state}, {address.city}, {address.postalCode}</p>
      <p>{address.phone}</p>
      <div className="actions">
        <Button primary onClick={()=>openModal(`Editar ${address.title}`, address)} ><Icon name='edit' /></Button>
        <Button onClick={deleteAddress} loading={loadingDelete}><Icon name='trash' /></Button>
      </div>
    </div>
  )
}

export default AddressList;
