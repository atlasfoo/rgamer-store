import { ToastContainer, toast } from "react-toastify";
import { useMemo, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";

import AuthContext from "../context/AuthContext";
import { setToken, getToken, removeToken } from "../api/token";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";
import "../scss/global.scss";
import CartContext from "../context/CartContext";
import { getCartProducts, addProductToCart, countCartProducts, removeProductFromCart, removeAllCartProducts } from "../api/cart";

export default function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState({});
  const [totalCartProducts, setTotalCartProducts] = useState(0)
  const [reloadUser, setReloadUser] = useState(false);
  const [reloadCart, setReloadCart] = useState(false);
  const router = useRouter();

  // recarga al usuario en cada cambio del mismo (llamado mediante reload)
  useEffect(() => {
    const token = getToken();
    if (token) {
      setAuth({
        token,
        user_id: jwtDecode(token)?.id,
      });
    } else {
      setAuth(null);
    }
    setReloadUser(false);
  }, [reloadUser]);

  useEffect(() => {
    setTotalCartProducts(countCartProducts());
    setReloadCart(false);
  }, [reloadCart, auth])

  const login = (token) => {
    setToken(token);
    setAuth({
      token,
      user_id: jwtDecode(token)?.id,
    });
  };

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
      router.push("/");
    }
  };

  const addProduct = (product) => {
    if(auth){
      addProductToCart(product);
      setReloadCart(true);
    } else {
      toast.warning("Por favor inicie sesión para agregar producto al carrito");
    }
  }

  const removeProduct = (product) => {
    removeProductFromCart(product);
    setReloadCart(true);
  }

  const authData = useMemo(
    () => ({
      session: auth,
      login,
      logout,
      setReloadUser,
    }),
    [auth]
  );

  const cartData = useMemo(() => ({
    productsCount: totalCartProducts,
    addProduct: (product) => addProduct(product),
    getProducts: ()=>getCartProducts(),
    removeProduct: (product) => removeProduct(product),
    removeAllProducts: removeAllCartProducts,
  }), [totalCartProducts]);

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      <CartContext.Provider value={cartData}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </CartContext.Provider>
    </AuthContext.Provider>
  );
}
