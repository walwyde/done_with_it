import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";


export const cacheStorage = async (key, value) => {
  try {
    const item = JSON.stringify({
      value,
      timeStamp: Date.now(),
    });
    const ok = await AsyncStorage.setItem(key, item);
    if (!ok) return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  return now.diff(item.timeStamp, "minutes") > 5;
};

export const getItem = async (value) => {
  try {
    const result = await AsyncStorage.getItem(value);
    if (!result) return null;

    const item = JSON.parse(result);

    if (isExpired(item)) {
      await AsyncStorage.removeItem(value);
      return null;
    }

    return item.value;
  } catch (err) {
    console.log(err);
    return null;
  }
};
