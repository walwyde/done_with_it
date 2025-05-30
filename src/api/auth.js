import cachUser from "../util/userTokenStore";
import apiClient from "./client";

export const login = async (email, password) => {
  try {
    const response = await apiClient.post("/auth", { email, password });
    if (!response.ok) {
      return {
        ok: false,
        data: response.data.error,
      };
    } else {
      cachUser.storeToken(response.data);
      return {
        ok: true,
        data: response.data,
      };
    }
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      data: error.message,
    };
  }
};

export const register = async ({ name, email, password }) => {
  try {
    const response = await apiClient.post("/users", {
      email,
      password,
      name,
    });

    if (!response.ok)
      return {
        ok: false,
        data: response.data.error,
      };
    return {
      ok: true,
      data: response.data,
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      data: error.message,
    };
  }
};
