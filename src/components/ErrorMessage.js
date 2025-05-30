import { StyleSheet, View } from "react-native";
import React from "react";

import AppText from "./AppText";
import AppButton from "./AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";

const ErrorMessageScreen = ({ type, message, icon, onPress, buttonAction }) => {
  return (
    <View style={[styles.top]}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          size={20}
          color={type === "alert" ? "white" : "tomato"}
          style={styles.image}
          name={icon === "" ? "alert" : icon}
        />
        <AppText style={styles.text}>{message}</AppText>
      </View>

      {buttonAction && (
        <AppButton title={buttonAction} color={"secondary"} onPress={onPress} />
      )}
    </View>
  );
};

export default ErrorMessageScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
  },
  top: {
    zIndex: 1,
    backgroundColor: colors.primary,
    // top: Constants.statusBarHeight,
    padding: 10,
    position: "absolute",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.dark,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
    width: "100%",
  },
});
