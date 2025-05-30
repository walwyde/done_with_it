import { NavigationContainer } from "@react-navigation/native";
import NetInfo from "./src/components/NetInfo";
import { useCallback, useEffect, useState } from "react";
import * as splashScreen from "expo-splash-screen";

import AppTheme from "./src/config/navigationTheme";
import AuthContext from "./src/contexts/Auth";
import AuthNavigator from "./src/navigation/auth";
import tokenStore from "./src/util/userTokenStore";
import TabNavigation from "./src/navigation/tabs";
import { View } from "react-native";

splashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    try {
      const user = await tokenStore.getUser();
      if (user) setUser(user);
      setIsReady(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    restoreUser();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) await splashScreen.hideAsync();
  }, [isReady]);

  if (!isReady) return null;

  return (
    <View style={{ width: "100%", height: "100%" }} onLayout={onLayoutRootView}>
      <AuthContext.Provider value={{ user, setUser }}>
        <NetInfo />
        <NavigationContainer theme={AppTheme.appDefaultTheme}>
          {user !== null ? <TabNavigation /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </View>
  );
}
