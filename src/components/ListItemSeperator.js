import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../config/colors";

const ListItemSeperator = () => {
  return <View style={styles.seperator} />;
};

export default ListItemSeperator;

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1.5,
    backgroundColor: colors.medium,
  },
});
