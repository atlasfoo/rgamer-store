import { ToastContainer } from "react-toastify";
import "../scss/global.scss";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../context/AuthContext";
import { useMemo, useState, useEffect } from "react";
import jwtDecode from "jwt-decode";
import { setToken } from "../api/token";

export default function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState({});
  
  useEffect(() => {
    
    return () => {
      
    }
  }, [])

  const login = (token) => {
    setToken(token);
    setAuth({
      token,
      user_id: jwtDecode(token)?.id
    })
  }
  
  const authData = useMemo(()=>({
    session: {},
    login,
    logout: () => null,
    setReloadUser: () => null,
  }), [auth]);

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
