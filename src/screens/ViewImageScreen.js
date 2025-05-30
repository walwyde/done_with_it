import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeButton} >
        <MaterialCommunityIcons name={"close"} size={45} color={"white"}/>
      </View>
      <View style={styles.selectButtton}>
      <MaterialCommunityIcons name={"trash-can-outline"} size={45} color={"white"}/>

      </View>
      <Image
        style={styles.image}
        blurRadius={2.5}
        resizeMode="contain"
        source={require("../assets/kano.jpeg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  closeButton: {
    position: "absolute",
    top: 60,
    left: 30,
  },
  selectButtton: {
    position: "absolute",
    top: 60,
    right: 30,
  },
});
