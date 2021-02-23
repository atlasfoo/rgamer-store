import { BASE_PATH } from "../utils/consts";

export const getLastGames = async (limit) => {
  try {
    const url = `${BASE_PATH}/games?_limit=${limit}&_sort=createdAt:desc`;
    const response = await fetch(url);
    const result = response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};
