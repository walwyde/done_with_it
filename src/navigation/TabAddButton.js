import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";

const TabAddButton = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <MaterialCommunityIcons name="plus-circle" size={45} color={"white"} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TabAddButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderColor: colors.light,
    borderWidth: 10,
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    bottom: 40,
  },
});
