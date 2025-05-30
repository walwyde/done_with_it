import { StyleSheet, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const IconComponent = ({
  name,
  size = 25,
  iconColor = "white",
  backgroundColor,
}) => {
  return (
    <View style={[styles.icon, { backgroundColor: backgroundColor }]}>
      <MaterialCommunityIcons name={name} size={size} color={iconColor} />
    </View>
  );
};

export default IconComponent;

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});
