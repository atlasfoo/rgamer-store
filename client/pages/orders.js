import React, { useEffect, useState } from 'react';
import { getOrdersByUser } from '../api/order';
import useAuth from '../hooks/useAuth';
import BasicLayout from '../layouts/BasicLayout/BasicLayout';

const orders = () => {
  const [orders, setOrders] = useState(null);
  const {session, logout} = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getOrdersByUser(session.user_id, logout);
      setOrders(response || []);
    })()
  }, [input])

  return (
    <BasicLayout className='orders'>
      <div className='orders__block'>
        <div className="title">
          Pedidos
        </div>
        <div className="data"></div>
      </div>
    </BasicLayout>
  )
}

export default orders
