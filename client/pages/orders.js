import { map, size } from "lodash";
import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import { getOrdersByUser } from "../api/order";
import Order from "../components/Orders/Order";
import useAuth from "../hooks/useAuth";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";

const orders = () => {
  const [orders, setOrders] = useState(null);
  const { session, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getOrdersByUser(session.user_id, logout);
      setOrders(response || []);
    })();
  }, [session, logout]);

  return (
    <BasicLayout className="orders">
      <div className="orders__block">
        <div className="title">Pedidos</div>
        <div className="data">
          {size(orders) === 0 ? (
            <h2 style={{textAlign:"center"}}>Todav&iacute;a no has realizado ninguna compra</h2>
          ) : (
            <OrderList orders={orders}/>
          )}
        </div>
      </div>
    </BasicLayout>
  );
};

function OrderList({orders}){
  return(
    <Grid>
      {map(orders, (order) => (
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Order order={order}/>
        </Grid.Column>
      ))}
    </Grid>
  )
}

export default orders;
