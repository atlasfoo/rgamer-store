import { getToken, hasExpiredToken } from "../api/token"

/**
 * Executes a async fetch to api auth required endpoints
 * @param {string} url: the endpoint url to fetch
 * @param {object} params: the fetch structure, specify for GET, POST, PUT here
 * @param {function} logout: the logout predefined function
 * @returns {object} the response json if success, otherwise, the error catched
 */
export const authFetch = async (url, params, logout) => {
  const token = getToken();
  if(!token){
    logout();
  }else{
    if(hasExpiredToken(token)){
      logout();
    }else{
      const tempParams = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        }
      };
      try {
        const response = await fetch(url, tempParams);
        const result = await response.json();
        return result;
      } catch (error) {
        return error;
      }
    }
  }
}
