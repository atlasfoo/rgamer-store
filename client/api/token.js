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