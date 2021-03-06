import React, { useEffect, useState } from "react";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";
import * as gameApi from "../api/game";

import useCart from "../hooks/useCart";
import { size } from "lodash";
import { Loader } from "semantic-ui-react";
import { CartSummary, Payment, ShippingSelect } from "../components/Cart";

const cart = () => {
  const [products, setProducts] = useState(null);
  const [reloadCart, setReloadCart] = useState(false);

  const { getProducts } = useCart();

  useEffect(() => {
    setProducts(getProducts());
  }, [reloadCart]);

  if (!products) return <EmptyCart />;

  return (
    <FullCart
      products={products}
      reloadCart={reloadCart}
      setReloadCart={setReloadCart}
    />
  );
};

function EmptyCart() {
  return (
    <BasicLayout className="empty-cart">
      <h2>No hay productos en el carrito</h2>
    </BasicLayout>
  );
}

function FullCart({ products, reloadCart, setReloadCart }) {
  const [productsData, setProductsData] = useState(null);
  const [shippingAddress, setShippingAddress] = useState(null);

  useEffect(() => {
    (async () => {
      const productsTemp = [];
      for await (const product of products) {
        const data = await gameApi.getGameByUrl(product);
        productsTemp.push(data[0]);
      }
      setProductsData(productsTemp);
    })();
    setReloadCart(false);
  }, [products]);

  return (
    <BasicLayout className="full-cart">
      {!productsData || size(productsData) <= 0 ? (
        <Loader active>Cargando carrito</Loader>
      ) : (
        <>
          <CartSummary
          products={productsData}
          reloadCart={reloadCart}
          setReloadCart={setReloadCart}
          />
          <ShippingSelect setShippingAddress={setShippingAddress}/>
          {shippingAddress && <Payment products={productsData} shippingAddress={shippingAddress}/>}
        </>
      )}
    </BasicLayout>
  );
}

export default cart;
