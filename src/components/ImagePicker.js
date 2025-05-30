import { Image, StyleSheet, TouchableOpacity, Alert } from "react-native";

import * as imagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";
import { useEffect } from "react";

const ImagePicker = ({ uri, onImageChange }) => {
  useEffect(() => {
    requestPermission();
  }, []);
  const requestPermission = async () => {
    const result = await imagePicker.requestMediaLibraryPermissionsAsync();

    if (!result.granted) alert("You need to allow permission to use this app");
  };

  const lauchImageLibrary = async () => {
    try {
      if (uri) {
        Alert.alert(
          "Delete Image?",
          "Are you sure you want to delete this image?",
          [{ text: "Yes", onPress: () => onImageChange(null) }, { text: "No" }]
        );
      } else {
        const result = await imagePicker.launchImageLibraryAsync({
          mediaTypes: imagePicker.MediaTypeOptions.Images,
          quality: 0.5,
        });
        if (result.canceled) return;
        onImageChange(result.assets[0].uri);
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Error", `${err.message}`, [
        { text: "Try Again", onPress: () => lauchImageLibrary() },
        { text: "Cancel" },
      ]);
    }
  };
  return (
    <TouchableOpacity style={styles.button} onPress={() => lauchImageLibrary()}>
      {!uri && (
        <MaterialCommunityIcons size={40} name="camera" color={"white"} />
      )}
      {uri && <Image source={{ uri: uri }} style={styles.image} />}
    </TouchableOpacity>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
