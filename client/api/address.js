import {BASE_PATH} from '../utils/consts'
import {authFetch} from '../utils/fetch'

export const create = async (address, logout) => {
  try {
    const url = `${BASE_PATH}/addresses`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(address),
    }
    const result = await authFetch(url, params, logout);
    return result;
  } catch (error) {
    console.error(error);
    return null;    
  }
}