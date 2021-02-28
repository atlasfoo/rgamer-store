import { size } from "lodash";
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

export const add = async (userId, gameId, logout) => {
  try {

    const dataFound = await isFavorite(userId, gameId, logout);

    if(!dataFound || size(dataFound) > 0 ) return null

    const url = `${BASE_PATH}/favorites`

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: userId,
        game: gameId
      }),
    };

    return await authFetch(url, params, logout);

  } catch (error) {
    console.log(error);
    return null;
  }
}

export const remove = async (userId, gameId, logout) => {
  try {

    const dataFound = await isFavorite(userId, gameId, logout);

    if(!dataFound || size(dataFound) <= 0 ) return null

    const url = `${BASE_PATH}/favorites/${dataFound[0]?._id}`;

    const params = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return await authFetch(url, params, logout);

  } catch (error) {
    console.log(error);
    return null;
  }
}

export const getByUser = async (userId, logout) => {
  try {
    const url = `${BASE_PATH}/favorites?user=${userId}`

    return await authFetch(url, null, logout);

  } catch (error) {
    console.log(error);
    return null;
  }
  
}