import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "./AppText";
import { colors } from "../config/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ListItem = ({
  title,
  subTitle,
  image,
  onPress,
  style,
  IconComponent,
  renderRightActions,
}) => {
  return (
    <GestureHandlerRootView style={style}>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={[styles.container]}>
            {image && (
              <Image style={styles.image} source={image} resizeMode="contain" />
            )}
            {IconComponent && <IconComponent />}

            <View style={styles.subContainer}>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: colors.white,
    borderRadius: 15,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    padding: 5,
    width: "80%",
    textAlign: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 18,
    color: colors.black,
  },
  subTitle: {
    fontSize: 18,
    color: colors.medium,
  },
});

export default ListItem;
