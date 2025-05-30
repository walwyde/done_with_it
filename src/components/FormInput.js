import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { useFormikContext } from "formik";

import AppTextInput from "./AppTextInput";
import FormInputMessage from "./FormInputMessage";

const FormInput = ({ name, icon, width, ...rest }) => {
  const { values, setFieldValue, setFieldTouched, touched, errors } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        icon={icon}
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        autoCorrect={false}
        autoCapitalize="none"
        autoComplete="off"
        width={width}
        value={values[name]}
        {...rest}
      />
      <FormInputMessage visible={touched[name]} message={errors[name]} />
    </>
  );
};

export default FormInput;
