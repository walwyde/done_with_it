import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import AppButton from "../components/AppButton";
import { colors } from "../config/colors";
import AppText from "../components/AppText";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={0.5}
      resizeMode="cover"
      style={styles.imageBackground}
      source={require("../assets/kano.jpeg")}
    >
      <View style={styles.logo}>
        <AppText color={"white"} style={styles.backgroundText}>
          Buy Grain
        </AppText>
      </View>
      <AppText color={"white"} style={styles.backgroundText}>
        Nigerian Grain Market
      </AppText>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          color="primary"
          onPress={() => navigation.navigate("login")}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  backgroundText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    position: "absolute",
    top: 70,
    justifyContent: "center",
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 10,
  },
});
