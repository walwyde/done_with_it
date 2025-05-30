import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import AppForm from "../components/AppForm";
import AppText from "../components/AppText";
import AppScreen from "../components/AppScreen";
import AuthContext from "../contexts/Auth";
import { ErrorMessage } from "formik";
import FormInput from "../components/FormInput";
import { login, register } from "../api/auth";
import SubmitButton from "../components/SubmitButton";
import Loading from "../components/activities/Loading";
import useApi from "../hooks/useApi";
import useAuth from "../hooks/useAuth";

const RegisterScreen = () => {
  const [error, setError] = useState(false);
  const { setUser } = React.useContext(AuthContext);
  const registerApi = useApi(register);
  const loginApi = useApi(login);
  const { login: tokenLogin } = useAuth();
  const handleSubmit = async (values) => {
    try {
      const response = await registerApi.request({ ...values });
      if (!response.ok) return setError(!response.ok);

      const loginResponse = await loginApi.request(
        response.data.email,
        response.data.password
      );
      if (!loginResponse.ok) return setError(!loginResponse.ok);
      setUser(tokenLogin(loginResponse.data));
    } catch (err) {
      console.log(err);
    }
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

  return (
    <>
      <Loading visible={loginApi.loading || registerApi.loading} />
      <AppScreen>
        <AppText color={"primary"} style={styles.text}>
          Create Account
        </AppText>
        <AppForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <View style={styles.container}>
            {error && (
              <ErrorMessage
                render={() => (
                  <AppText style={styles.error} color={"danger"}>
                    {registerApi.data}
                  </AppText>
                )}
              />
            )}
            {error && (
              <ErrorMessage
                render={() => (
                  <AppText style={styles.error} color={"danger"}>
                    {loginApi.data}
                  </AppText>
                )}
              />
            )}
            <FormInput name={"name"} placeholder={"Name"} icon="account" />
            <FormInput name={"email"} placeholder={"Email"} icon="email" />
            <FormInput name={"password"} placeholder={"Password"} icon="lock" />

            <SubmitButton title="Register" color={"primary"} />
          </View>
        </AppForm>
      </AppScreen>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: { padding: 10 },
  error: { fontSize: 12, color: "red" },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});
