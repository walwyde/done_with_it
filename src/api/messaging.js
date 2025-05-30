import apiClient from "./client";

export default sendMessage = (message) => {
  return apiClient.post("/messages", message);
};
