import { StyleSheet,} from "react-native";
import React from "react";

import AppText from "./AppText";

const FormInputMessage = ({ visible, message }) => {
  if (!visible) return null;
  return <AppText style={styles.text}>{message}</AppText>;
};

export default FormInputMessage;

const styles = StyleSheet.create({
  text: { color: "red", alignSelf: "center" },
});
