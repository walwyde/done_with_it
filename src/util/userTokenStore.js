import * as store from "expo-secure-store";
import { jwtDecode } from "jwt-decode";

const storeToken = async (token) => {
  try {
    await store.setItemAsync("authToken", JSON.stringify(token));
    return { ok: true };
  } catch (err) {
    console.log("failed to store user token", err);
    return { ok: false };
  }
};

const getToken = async () => {
  try {
    const token = await store.getItemAsync("authToken");

    if (!token) return { ok: false, token: null };

    return { token: JSON.parse(token), ok: true };
  } catch (err) {
    console.log(err);

    return { ok: false, token: null };
  }
};

const getUser = async () => {
  const { token } = await getToken();

  return token ? jwtDecode(token) : null;
};

const removeToken = async () => {
  try {
    await store.deleteItemAsync("authToken");
  } catch (err) {
    console.log("error removing token", err);
  }
};

export default {
  getUser,
  getToken,
  storeToken,
  removeToken,
};
