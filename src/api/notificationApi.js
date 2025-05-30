import apiClient from "./client";

export default (notificationToken) => {
  return apiClient.post("/expoPushTokens", { token: notificationToken });
};
