import { createContext } from "react";

const CartContext = createContext({
  productsCount: 0,
  addProduct: () => null,
  getProducts: () => null,
  removeProduct: () => null,
  removeAllProducts: () => null,
});

export default CartContext;