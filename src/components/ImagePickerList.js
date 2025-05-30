import { ScrollView, StyleSheet, View } from "react-native";
import React, { useRef } from "react";

import ImagePicker from "./ImagePicker";

const ImagePickerList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef();

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        {imageUris.map((uri) => (
          <View key={uri} style={styles.image}>
            <ImagePicker uri={uri} onImageChange={() => onRemoveImage(uri)} />
          </View>
        ))}
      <ImagePicker onImageChange={(uri) => onAddImage(uri)} />
      </ScrollView>
    </View>
  );
};

export default ImagePickerList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
