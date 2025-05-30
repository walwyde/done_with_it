import { StyleSheet } from "react-native";
import React from "react";

import { useFormikContext } from "formik";

import AppPicker from "./AppPicker";
import FormInputMessage from "./FormInputMessage";

const FormAppPicker = ({ items, name, icon }) => {
  const { errors, touched, setFieldValue, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        icon={icon}
        placeholder={"Select a category"}
        onSelectItem={(item) => setFieldValue(name, item)}
        SelectedItem={values[name]}
      />
      <FormInputMessage message={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormAppPicker;

const styles = StyleSheet.create({});
