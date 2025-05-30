import React, { useState } from "react";
import LottieView from "lottie-react-native";
import { Modal, StyleSheet, View } from "react-native";
import AppText from "../AppText";

const Loading = ({ visible }) => {
  const [dots, setDots] = useState([".", ".", "."]);
  setTimeout(() => {
    setDots((prev) => {
      if (prev.length === 3) return [];
      return [...prev, "."];
    });
  }, 1000);
  if (!visible) return null;
  return (
    <View style={styles.mainContainer}>
      <Modal visible={visible} transparent>
        <View style={styles.container}>
          <LottieView
            source={require("../../assets/animations/lottieLoading.json")}
            autoPlay
            loop
            style={{ width: 300, height: 300, backfaceVisibility: "hidden" }}
          />
          <AppText color={"primary"}>Please Wait{[...dots]}</AppText>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    position: "absolute",
    backgroundColor: "#fff",
    opacity: 0.8,
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
});

export default Loading;
