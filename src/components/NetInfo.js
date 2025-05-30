import { StyleSheet, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";

import { colors } from "../config/colors";
import useNetInfo from "../hooks/useNetInfo";

const NetInfo = () => {
  var displayNetInfo = useNetInfo();
  return (
    !displayNetInfo && (
      <View style={styles.container}>
        <MaterialCommunityIcons
          size={15}
          color={"tomato"}
          style={styles.image}
          name={"antenna"}
        />
        <AppText style={styles.text}>Your Network seems to be offline</AppText>
      </View>
    )
  );
};

export default NetInfo;

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    backgroundColor: colors.primary,
    top: Constants.statusBarHeight,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
  },
});
