import { Modal, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "../components/AppText";

const UploadProgressScreen = ({ progress = 0, visible }) => {
  return (
    <Modal visible={visible}>
      <View>
        <AppText>{progress}</AppText>
      </View>
    </Modal>
  );
};

export default UploadProgressScreen;

const styles = StyleSheet.create({});
