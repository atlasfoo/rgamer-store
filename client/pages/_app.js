import { ToastContainer } from "react-toastify";
import "../scss/global.scss";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../context/AuthContext";
import { useMemo, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { setToken, getToken, removeToken } from "../api/token";
import { useRouter } from "next/router";

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

  const logout = (token) => {
    if (auth) {
      removeToken();
      setAuth(null);
      router.push("/");
    }
  };

  const authData = useMemo(
    () => ({
      session: auth,
      login,
      logout,
      setReloadUser,
    }),
    [auth]
  );

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
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
    </AuthContext.Provider>
  );
}
