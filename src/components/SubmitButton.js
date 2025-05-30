import React from "react";

import { useFormikContext } from "formik";
import AppButton from "./AppButton";
import useNetInfo from "../hooks/useNetInfo";

const SubmitButton = ({ title, color, ...rest }) => {
  const { handleSubmit } = useFormikContext();
  const networkAvailable = useNetInfo();

  return (
    <AppButton
      style={{ marginVertical: 20 }}
      color={networkAvailable ? color : "medium"}
      title={title}
      onPress={handleSubmit}
      // disabled={!networkAvailable}
      {...rest}
    />
  );
};

export default SubmitButton;
