import { BASE_PATH } from "../utils/consts";

export const getAll = async () => {
  try {
    const url = `${BASE_PATH}/platforms?_sort=position:asc`;
    const response = await fetch(url);
    const result = response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}