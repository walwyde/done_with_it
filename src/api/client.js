import { create } from "apisauce";
import { cacheStorage, getItem } from "../util/cacheStorage";
import userTokenStore from "../util/userTokenStore";

const apiClient = create({
  baseURL: "http://172.20.10.7:9000/api",
});

//
// 192.168.111.42:9000

apiClient.addAsyncRequestTransform(async (request) => {
  try {
    const res = await userTokenStore.getToken();
    if (!res.ok) return;
    request.headers["x-auth-token"] = res.token;
  } catch (error) {
    console.log("error setting auth token", error);
  }
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  try {
    const response = await get(url, params, axiosConfig);

    if (response.ok) {
      const { ok } = cacheStorage(url, response.data);
      if (!ok) return { ...response, isDataCached: false };
      return { ...response };
    }

    const cachedData = await getItem(url);

    if (cachedData) {
      return {
        ...response,
        ok: true,
        data: JSON.parse(cachedData),
        isDataCached: true,
      };
    }

    return { ...response, ok: false };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      response: { ...error },
    };
  }
};

export default apiClient;
