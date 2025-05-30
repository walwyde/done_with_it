import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import { colors } from "../config/colors";
import AppText from "./AppText";

const AppCard = ({
  title,
  subTitle,
  imageUrl,
  onPress,
  imageThumbnail,
  tint,
}) => {
  return (
    <TouchableHighlight
      style={styles.card}
      onPress={onPress}
      underlayColor={colors.white}
    >
      <View>
        <Image
          resizeMode="cover"
          uri={imageUrl}
          preview={imageThumbnail}
          tint={tint}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} color={"medium"}>
            {title}
          </AppText>
          <AppText style={styles.price} color={"secondary"}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default AppCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 15,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 100,
      height: 100,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
    overflow: "hidden",
    marginVertical: 15,
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  title: {
    marginVertical: 7,
    fontWeight: "bold",
    fontSize: 18,
    color: colors.dark,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 16,
  },
});
