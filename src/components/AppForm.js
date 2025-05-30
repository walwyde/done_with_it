import React from "react";

import { Formik } from "formik";

const AppForm = ({ children, ...rest }) => {
  return <Formik {...rest}>{() => children}</Formik>;
};

export default AppForm;
