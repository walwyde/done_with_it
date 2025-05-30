import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";
import registerNotification from "../api/notificationApi";
import storeToken from "../util/userTokenStore";
import { useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default () => {
  useEffect(() => {
    setUpNotification();
    const subscriber = Notifications.addNotificationResponseReceivedListener(
      (Response) => console.log(Response.notification)
    );

    return () => subscriber.remove();
  }, []);
};

const getNotifyToken = async () => {
  let token;

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: "8c9e72f0-c12e-4031-82db-f47e21ea8d87",
    });
    await storeToken.storeToken("pushToken", token.data);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token.data;
};

const setUpNotification = async () => {
  try {
    let token = null;
    const storedToken = await storeToken.getToken("pushtoken");
    if (!storeToken) {
      token = await getNotifyToken();
    } else {
      token = storedToken;
    }

    await registerNotification(token);
  } catch (err) {
    console.log(err);
  }
};
