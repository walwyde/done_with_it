import { Button, Modal, StyleSheet, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { Bar } from "react-native-progress";
import { colors } from "../config/colors";
import AppText from "../components/AppText";

const UpLoadAnimScreen = ({ visible, progress = 0, onDone }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <>
            <Bar
              width={300}
              color={colors.primary}
              progress={progress}
              animated
            />
            <AppText color={"dark"} style={{ marginTop: 10 }}>
              uploading {Math.round(progress * 100)}%
            </AppText>
          </>
        ) : (
          <LottieView
            autoPlay
            style={{ width: 500, height: 500 }}
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/Animation - 1715366893333.json")}
          />
        )}
      </View>
    </Modal>
  );
};

export default UpLoadAnimScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
