import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import React from "react";

import AppScreen from "../components/AppScreen";
import ListItem from "../components/ListItem";
import AppText from "../components/AppText";
import { colors } from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";
import IconComponent from "../components/IconComponent";
import useAuth from "../hooks/useAuth";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const profileData = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: colors.primary },
    targetScreen: "UserListingsScreen",
  },
  {
    title: "My Messages",
    icon: { name: "message", backgroundColor: colors.secondary },
    targetScreen: "MessagesScreen",
  },
];
// study section list
const ProfileScreen = ({ navigation }) => {
  const { user, logout } = useAuth();

  return (
    <AppScreen>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/profile.png")}
          resizeMode="cover"
        >
          <View style={styles.imageTextContainer}>
            <>
              <MaterialCommunityIcons
                name="account"
                size={15}
                color={colors.secondary}
              />
              <AppText style={styles.profileName}>{user.name}</AppText>
            </>
            <>
              <MaterialCommunityIcons
                name="mail"
                size={15}
                color={colors.secondary}
              />

              <AppText style={styles.profileAddress}>{user.email}</AppText>
            </>
          </View>
        </ImageBackground>
        <View style={styles.subContainer}>
          <FlatList
            data={profileData}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <ListItem
                onPress={() => navigation.navigate(item.targetScreen)}
                title={item.title}
                subTitle={item.desc}
                IconComponent={() => (
                  <IconComponent
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                    size={25}
                  />
                )}
              />
            )}
            ItemSeparatorComponent={ListItemSeperator}
          />
        </View>
        <ListItem
          title={"Log Out"}
          IconComponent={() => (
            <IconComponent name="logout" backgroundColor="tomato" />
          )}
          onPress={logout}
        />
      </View>
    </AppScreen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
  },
  imageTextContainer: {
    padding: 2.5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  subContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
    flex: 1,
  },
  image: {
    height: 200,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "dodgerblue",
  },
  profileName: {
    color: colors.dark,
    padding: 2,
    marginRight: 20,
    height: "100%",
    fontWeight: "bold",
    fontSize: 14,
  },
  profileAddress: {
    fontSize: 14,
    color: colors.dark,
    fontWeight: "bold",
  },
});
