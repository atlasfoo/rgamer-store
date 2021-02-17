import { BASE_PATH } from "../utils/consts";
import { authFetch } from "../utils/fetch";

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
  } catch (error) {return null;}
};

const resetPassword = async (email) => {
  try {
    const url = `${BASE_PATH}/auth/reset-password`;

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email}),
    };

    const response = await fetch(url, params);

    const result = await response.json();

    return result;
  } catch (error) {
    return null;
  }
}

const getMe = async (logout) => {
  try{
    const url = `${BASE_PATH}/users/me`;
    const result = await authFetch(url, null, logout);
    return result ? result : null;
  }catch(error){
    return null;
  }
}

const updateNames = async (userId, data, logout) => {
  try {
    const url = `${BASE_PATH}/users/${userId}`;
    const params = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }

    const result = await authFetch(url, params, logout);

    return result ? result : null;

  } catch (error) {
    console.error(error);
    return null;
  }
}

const updateEmail = async (userId, email, logout) => {
  try {
    const url = `${BASE_PATH}/users/${userId}`;
    const params = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email})
    }

    const result = await authFetch(url, params, logout);

    return result ? result : null;

  } catch (error) {
    console.error(error);
    return null;
  }
}

const updatePassword = async (userId, password, logout) => {
  try {
    const url = `${BASE_PATH}/users/${userId}`;
    const params = {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({password})
    }

    const result = await authFetch(url, params, logout);

    return result ? result : null;

  } catch (error) {
    console.error(error);
    return null;
  }
}

export { create, login, resetPassword, getMe, updateNames, updateEmail, updatePassword };
