import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";

const StlyedPickerItem = ({ icon, item, onSelect }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: item.backgroundColor },
        ]}
      >
        <MaterialCommunityIcons name={item.icon} size={25} color="white" />
      </View>
      <AppText>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default StlyedPickerItem;

const styles = StyleSheet.create({
  container: {
    width: "33%",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
