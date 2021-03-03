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
import { getCartProducts, addProductToCart } from "../api/cart";

export default function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState({});
  const [reloadUser, setReloadUser] = useState(false);
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
    } else {
      toast.warning("Por favor inicie sesión para agregar producto al carrito");
    }
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
    productsCount: 0,
    addProduct: (product) => addProduct(product),
    getProducts: getCartProducts,
    removeProduct: () => null,
    removeAllProducts: () => null,
  }), []);

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
