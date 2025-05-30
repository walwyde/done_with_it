import React from "react";

import { useFormikContext } from "formik";
import ImagePickerList from "./ImagePickerList";
import FormInputMessage from "./FormInputMessage";

const FormImagePicker = ({ name }) => {
  const { touched, errors, setFieldValue, values } = useFormikContext();

  const imageUris = values[name];

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((u) => u !== uri)
    );
  };

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  return (
    <>
      <ImagePickerList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <FormInputMessage message={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
