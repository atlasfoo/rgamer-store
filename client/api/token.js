import { TOKEN } from "../utils/consts";

export function setToken(token){
  localStorage.setItem(TOKEN, token);
}