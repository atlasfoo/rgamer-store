import { BASE_PATH } from "../utils/consts";
import { authFetch } from "../utils/fetch";

export const isFavorite = async (userId, gameId, logout) => {
  try {
    const url = `${BASE_PATH}/favorites?user=${userId}&game=${gameId}`

    return await authFetch(url, null, logout);

  } catch (error) {
    console.log(error);
    return null;
  }
}