import { View, StyleSheet, Modal, Button } from "react-native";
import React, { useState } from "react";

import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import { colors } from "../config/colors";
import ListItem from "../components/ListItem";
import useAuth from "../hooks/useAuth";
import AppForm from "../components/AppForm";
import FormInput from "../components/FormInput";
import FormValidation from "../schemas/FormValidation";
import AppButton from "../components/AppButton";
import AppScreen from "../components/AppScreen";
import SubmitButton from "../components/SubmitButton";
import sendMessage from "../api/messaging";
import * as Notifications from "expo-notifications";

const ListingDetailsScreen = ({ route: { params: listing }, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async (values) => {
    const message = { ...values, listingId: listing.id };
    setModalVisible(false);
    const res = await sendMessage(message);
    if (!res.ok)
      return await Notifications.scheduleNotificationAsync({
        content: {
          title: "Something went wrong",
          body: "Failed to send message to " + listing.owner,
        },
        trigger: {
          seconds: 2,
        },
      });
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "message sent",
        body: `message will be sent to ${listing.owner}`,
      },
      trigger: {
        seconds: 2,
      },
    });
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        preview={listing.images[0].thumbnailUrl}
        tint="light"
        uri={listing.images[0].url}
      />
      <View style={styles.listDetails}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>${listing.price}</AppText>
        {listing.description && (
          <AppText style={styles.description}>{listing.description}</AppText>
        )}
      </View>
      <View style={styles.listItemContainer}>
        <ListItem
          style={styles.listItem}
          title={listing.owner}
          subTitle={"10 Listings"}
          image={require("../assets/profile.png")}
          onPress={() => navigation.navigate("AccountScreen")}
        />
      </View>
      {listing.userId.toString() !== user.userId.toString() && (
        <>
          <AppButton
            title={`contact ${listing.owner}`}
            color={"primary"}
            onPress={() => setModalVisible(true)}
          />
          <Modal visible={modalVisible}>
            <AppScreen>
              <AppForm
                onSubmit={handleSubmit}
                initialValues={{ message: "" }}
                validationSchema={FormValidation.contactFormValidation}
              >
                <FormInput
                  name={"message"}
                  placeholder={"contact " + user.name}
                />
                <SubmitButton title={"submit"} color={"primary"} />
              </AppForm>
            </AppScreen>
            <Button title="Go Back" onPress={() => setModalVisible(false)} />
          </Modal>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  description: {
    color: colors.medium,
  },
  image: {
    height: 250,
  },
  listDetails: {
    paddingHorizontal: 15,
    backgroundColor: "#2a2b",
  },
  listItem: {
    width: "90%",
  },
  listItemContainer: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.dark,
    fontSize: 18,
    marginVertical: 7,
    fontWeight: "bold",
  },
  price: {
    color: colors.danger,
    fontWeight: "bold",
    fontSize: "16",
  },
});
export default ListingDetailsScreen;
