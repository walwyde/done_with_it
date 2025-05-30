import React from "react";

import { StyleSheet, TouchableOpacity } from "react-native";

import AppText from "./AppText";
import { colors } from "../config/colors";

export default function AppButton({ title, onPress, color, style, ...rest }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }, style]}
      onPress={onPress}
      {...rest}
    >
      <AppText style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    // padding: 2.5,
    borderRadius: 25,
    backgroundColor: colors.primary,
    width: "100%",
    height: 40,
    color: colors.primary,
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.white,
    textTransform: "capitalize",
  },
});
