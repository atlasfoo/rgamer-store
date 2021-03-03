import { toast } from 'react-toastify';
import { CART } from '../utils/consts';
import _, { size } from 'lodash'

export const getCartProducts = () => {
  const cart = localStorage.getItem(CART);

  if(!cart){
    return null;
  }else{
    const products = cart.split(',');
    return products;
  }
}

export const addProductToCart = (product) => {
  const cart = getCartProducts();

  if(!cart){
    localStorage.setItem(CART, product);
    toast.success("Producto añadido al carrito");
  } else {
    if(_.includes(cart, product)){
      toast.warning("Este producto ya está incluido en el carrito");
    } else {
      cart.push(product);
      localStorage.setItem(CART, cart);
      toast.success("Producto añadido al carrito");
    }
  }
}

export const countCartProducts = () => {
  const cart = getCartProducts();
  return (cart)? size(cart) : 0;
}