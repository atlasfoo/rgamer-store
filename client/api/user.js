import { BASE_PATH } from "../config/consts";

const create = async (user) => {
  try {
    const url = `${BASE_PATH}/auth/local/register`;

    console.log(BASE_PATH);

    console.log(user);
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const response = await fetch(url, params);

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const login = async (data) => {
  try {
    const url = `${BASE_PATH}/auth/local`;

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, params);

    const result = await response.json();

    return result;
  } catch (error) {}
};

export { create, login };
