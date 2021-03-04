import React, { useEffect, useState } from "react";
import BasicLayout from "../layouts/BasicLayout/BasicLayout";
import * as gameApi from "../api/game";

import useCart from "../hooks/useCart";
import CartSummary from "../components/Cart/CartSummary";

const cart = () => {
  const [products, setProducts] = useState(null);
  const { getProducts } = useCart();

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  if (!products) return <EmptyCart />;

  return <FullCart products={products} />;
};

function EmptyCart() {
  return (
    <BasicLayout className="empty-cart">
      <h2>No hay productos en el carrito</h2>
    </BasicLayout>
  );
}

function FullCart({ products }) {
  const [productsData, setProductsData] = useState(null);

  console.log(productsData);

  useEffect(() => {
    (async () => {
      const productsTemp = [];
      for await (const product of products) {
        const data = await gameApi.getGameByUrl(product);
        productsTemp.push(data[0]);
      }
      setProductsData(productsTemp);
    })();
  }, [products]);

  return (
    <BasicLayout className="full-cart">
      <CartSummary products={productsData} />
    </BasicLayout>
  );
}

export default cart;
