import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./account";
import AddListingScreen from "../screens/AddListingScreen";
import { colors } from "../config/colors";
import FeedNavigator from "./feed";
import TabAddButton from "./TabAddButton";
import useNotification from "../hooks/useNotification";

const Tab = createBottomTabNavigator();


const TabNavigation = () => {
useNotification();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.medium,
        tabBarStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AddListing"
        component={AddListingScreen}
        options={({ navigation, route }) => ({
          tabBarButton: () => (
            <TabAddButton onPress={() => navigation.navigate("AddListing")} />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
        component={AccountNavigator}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
