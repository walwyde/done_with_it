import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import FormValidation from "../schemas/FormValidation";

import AppForm from "../components/AppForm";
import FormAppPicker from "../components/FormAppPicker";
import AppScreen from "../components/AppScreen";
import { callApi } from "../api/customClient";
import FormImagePicker from "../components/FormImagePicker";
import FormInput from "../components/FormInput";
import SubmitButton from "../components/SubmitButton";
import useLocation from "../hooks/useLocation";
import { addListing } from "../api/listings";
import UpLoadAnimScreen from "./UpLoadAnimScreen";
import ErrorMessageScreen from "../components/ErrorMessage";

const AddListingScreen = () => {
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const location = useLocation();

  const initialValues = {
    title: "",
    price: "",
    description: "",
    imageUris: [],
    category: null,
  };

  const categories = [
    { label: "Fashion", value: 1 },
    { label: "Automibile", value: 2 },
    { label: "Furniture", value: 3 },
    { label: "Jewelry", value: 4 },
    { label: "Food", value: 5 },
  ];
  const handleSubmit = async (values, { resetForm }) => {
    setProgress(0);

    callApi.postListing(
      "http://172.20.10.7:9000/api/listings",
      { ...values, location },
      (data) => {
        if (data.error) return;
        setProgress(data.progress);
        setUploading(true);
        resetForm();
      }
    );

    // const listing = { ...values, location };
    // setUploading(true);

    // const result = await addListing(listing, (progress) => {
    //   setProgress(progress);
    // });

    // if (result.ok) {
    // } else {
    //   setError(result.problem);
    // }
  };

  const validationSchema = FormValidation.addListingFormValidation;
  return (
    <AppScreen>
      {error && (
        <ErrorMessageScreen
          message={error}
          onPress={() => setError(null)}
          buttonAction={"Close"}
          icon={"antenna"}
          visible={error}
        />
      )}
      <UpLoadAnimScreen
        onDone={() => setUploading(false)}
        progress={progress}
        visible={uploading}
      />
      <AppForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <View style={styles.container}>
          <FormImagePicker name={"imageUris"} />
          <FormInput name={"title"} placeholder={"Title"} />
          <FormAppPicker
            name="category"
            icon={"apps"}
            items={categories}
            placeholder={"Select category"}
          />
          <FormInput name={"price"} width={"50%"} placeholder={"Price"} />
          <FormInput name={"description"} placeholder={"Description"} />
          <SubmitButton title={"Add Listing"} color={"primary"} />
        </View>
      </AppForm>
    </AppScreen>
  );
};

export default AddListingScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
