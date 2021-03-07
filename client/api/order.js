import { BASE_PATH } from "../utils/consts";
import { authFetch } from "../utils/fetch";

export const getOrdersByUser = (userId, logout) => {
  try {
    const url = `${BASE_PATH}/orders?_sort=createdAt:desc&user=${userId}`;
    const result = authFetch(url, null, logout);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}