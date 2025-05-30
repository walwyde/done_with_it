import { Platform, StyleSheet, Text } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

import { colors } from "../config/colors";

const AppText = ({ children, color, style }) => {
  const [fontLoaded] = useFonts({
    caveit_regular: require("../assets/fonts/Caveat-Regular.ttf"),
  });
  return (
    <Text style={[styles.text, { color: colors[color] }, style]}>
      {fontLoaded ? children : "loading >>>"}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "caveit_regular",
    color: colors.primary,
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
