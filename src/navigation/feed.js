import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, presentation: "transparentModal" }}>
      <Stack.Screen name="listings" component={ListingsScreen} />
      <Stack.Screen name={"listingDetail"} component={ListingDetailsScreen} />
     
    </Stack.Navigator>
  );
};

export default AuthNavigator;
