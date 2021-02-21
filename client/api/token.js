import jwtDecode from "jwt-decode";
import { TOKEN } from "../utils/consts";

export function setToken(token){
  localStorage.setItem(TOKEN, token);
}

export function getToken(){
  return localStorage.getItem(TOKEN);
}

export function removeToken(){
  return localStorage.removeItem(TOKEN);
}

export function hasExpiredToken(token) {
  const tokenDecoded = jwtDecode(token);
  const expireDate = tokenDecoded?.exp * 1000;
  const currentDate = new Date().getTime();

  return (currentDate>expireDate);
}