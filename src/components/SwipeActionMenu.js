import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { colors } from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SwipeActionMenu = ({ iconName, onPress, backgroundColor, color }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, { backgroundColor: backgroundColor }]}>
        <MaterialCommunityIcons name={iconName} color={color} size={35} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SwipeActionMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
