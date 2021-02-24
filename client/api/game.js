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

export const getGamesByPlatform = async (platform, limit, start) => {
  try {
    const url = `${BASE_PATH}/games?platform.url=${platform}&_limit=${limit}&_sort=createdAt:desc&_start=${start}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }  
}

export const getTotalGamesPlatform = async (platform) => {
  try {
    const url = `${BASE_PATH}/games/count?platform.url=${platform}&_limit=${limit}&_sort=createdAt:desc&_start=${start}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }  
}