import { Platform, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";

const AppTextInput = ({ icon, width = "100%", ...rest }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          color={colors.medium}
          style={styles.icon}
          name={icon}
          size={20}
        />
      )}
      <TextInput
        style={styles.input}
        {...rest}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: colors.light,
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
    padding: 10,
  },
  input: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Caveat-Regular",
    fontSize: 18,
    color: colors.dark,
    width: "80%",
  },
  icon: {
    marginRight: 10,
  },
});
