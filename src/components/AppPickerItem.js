import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import AppText from "./AppText";
import { colors } from "../config/colors";

const AppPickerItem = ({ item, onSelect, width }) => {
  return (
    <TouchableOpacity style={[styles.container, { width }]} onPress={onSelect}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default AppPickerItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    marginVertical: 5,
    padding: 5,
    borderRadius: 15,
    marginVertical: 10,
  },
  text: {
    justifyContent: "center",
    textAlign: "center",
    textTransform: "capitalize",
  },
});
