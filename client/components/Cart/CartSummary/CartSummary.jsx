import { forEach, map } from "lodash";
import React, { useEffect, useState } from "react";
import { Icon, Image, Table } from "semantic-ui-react";
import useCart from "../../../hooks/useCart";

const CartSummary = ({ products, reloadCart, setReloadCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const { removeProduct } = useCart();

  const deleteProduct = (product) => {
    removeProduct(product);
    setReloadCart(true);
  };

  useEffect(() => {
    let price = 0;
    forEach(products, (product) => {
      price += product.price;
    });
    setTotalPrice(price);
  }, [products, reloadCart]);

  return (
    <div className="cart-summary">
      <div className="title">Resumen del carrito</div>
      <div className="data">
        <Table celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Producto</Table.HeaderCell>
              <Table.HeaderCell>Plataforma</Table.HeaderCell>
              <Table.HeaderCell>Entrega</Table.HeaderCell>
              <Table.HeaderCell>Precio</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {map(products, (product) => (
              <Table.Row key={product.id} className="cart-summary__product">
                <Table.Cell>
                  <Icon
                    name="close"
                    link
                    onClick={() => deleteProduct(product.url)}
                  />
                  <Image src={product.poster.url} alt={product.title} />
                  {product.title}
                </Table.Cell>
                <Table.Cell>{product.platform.title}</Table.Cell>
                <Table.Cell>Inmediata</Table.Cell>
                <Table.Cell>{product.price}$</Table.Cell>
              </Table.Row>
            ))}
            <Table.Row className="cart-summary__resume">
              <Table.Cell className="clear" />
              <Table.Cell colSpan="2">Total:</Table.Cell>
              <Table.Cell className="total-price">
                {totalPrice.toFixed(2)}$
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default CartSummary;
