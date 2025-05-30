import {
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../config/colors";
import AppText from "./AppText";
import AppPickerItem from "./AppPickerItem";
import AppButton from "./AppButton";
import AppScreen from "./AppScreen";

const AppPicker = ({
  icon,
  items,
  placeholder,
  SelectedItem,
  onSelectItem,
  PickerComponent = AppPickerItem,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setIsModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              color={colors.medium}
              style={styles.icon}
              name={icon}
              size={20}
            />
          )}
          <AppText style={styles.text}>
            <AppText>{SelectedItem ? SelectedItem.label : placeholder}</AppText>
          </AppText>
          <MaterialCommunityIcons
            color={colors.medium}
            name="chevron-double-down"
            size={20}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={isModalVisible} transparent={true}>
        <AppScreen style={styles.modalContainer}>
          <View style={styles.modalView}>
            <AppButton
              color={"secondary"}
              title="Close"
              onPress={() => setIsModalVisible(false)}
            />
            <FlatList
              data={items}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <PickerComponent
                  item={item}
                  onSelect={() => {
                    setIsModalVisible(false);
                    onSelectItem(item);
                  }}
                />
              )}
            />
          </View>
        </AppScreen>
      </Modal>
    </React.Fragment>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: colors.light,
    marginVertical: 10,
    padding: 10,
  },
  modalContainer: {
    padding: 20,
    justifyContent: "center",
    flex: 1,
    marginTop: 22,
  },
  modalView: {
    padding: 15,
    margin: 20,
    backgroundColor: "#eee",
    borderRadius: 20,
    alignItems: "center",
    top: 50,
    height: "90%",
  },
  icon: {
    marginRight: 10,
  },

  text: {
    flex: 1,
    fontSize: 18,
    color: colors.dark,
  },
});
