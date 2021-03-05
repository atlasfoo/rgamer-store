import { toast } from 'react-toastify';
import { CART } from '../utils/consts';
import _, { remove, size } from 'lodash'

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

export const removeProductFromCart = (product) => {
  const cart = getCartProducts();

  remove(cart, (item) => {
    return item === product;
  });

  if(size(cart) > 0) {
    localStorage.setItem(CART, cart);
  }else{
    localStorage.removeItem(CART);
  }
}

export const countCartProducts = () => {
  const cart = getCartProducts();
  return (cart)? size(cart) : 0;
}