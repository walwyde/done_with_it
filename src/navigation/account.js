import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"AccountScreen"} component={ProfileScreen} />
      <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
      <Stack.Screen name="UserListings" component={ListingsScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
