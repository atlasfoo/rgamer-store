import { toast } from 'react-toastify';
import { BASE_PATH, CART } from '../utils/consts';
import { omit, remove, size } from 'lodash'
import { authFetch } from '../utils/fetch';

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

/**
 * 
 * @param {object} token 
 * @param {array} products 
 * @param {string} userId 
 * @param {object} address (shippingAddress)
 * @param {function} logout 
 * @returns complete payment data 
 */
export const paymentCart = async (token, products, userId, address, logout) => {
  try {
    const shippingAddress = omit(address, ['user', 'createdAt']);

    const url = `${BASE_PATH}/orders`;
    const params = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        products,
        userId,
        shippingAddress
      })
    }
    const response = await authFetch(url, params, logout);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const removeAllCartProducts = () => {
  localStorage.removeItem(CART);
}
