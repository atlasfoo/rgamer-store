import React, { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth';
import * as addressService from '../../../api/address'

const AddressList = () => {
  const [addresses, setAddresses] = useState(initialState);

  const { session, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await addressService.getAll(session.userId, logout);
      setAddresses(response || []);
    })()
  }, [input])

  return (
    <div>
      Lista de Direcciones
    </div>
  )
}

export default AddressList
