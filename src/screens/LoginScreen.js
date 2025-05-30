import { StyleSheet, View } from "react-native";
import React from "react";

import * as Yup from "yup";

import AppForm from "../components/AppForm";
import AppText from "../components/AppText";
import AppScreen from "../components/AppScreen";
import { ErrorMessage } from "formik";
import FormInput from "../components/FormInput";
import { login } from "../api/auth";
import SubmitButton from "../components/SubmitButton";
import { colors } from "../config/colors";
import useAuth from "../hooks/useAuth";
import useApi from "../hooks/useApi";
import Loading from "../components/activities/Loading";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(4),
});
const LoginScreen = ({ navigator }) => {
  const authHook = useAuth();
  const loginApi = useApi(login);

  const [error, setError] = React.useState(false);

  const handleSubmit = async (values) => {
    try {
      const response = await loginApi.request(values.email, values.password);
      if (!response.ok) {
        return setError(true);
      } else {
        setError(false);
        authHook.login(response.data);
      }
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
      <Loading visible={loginApi.loading} />
      <AppScreen style={styles.container}>
        <View style={styles.logo}>
          <AppText color={"white"} style={styles.backgroundText}>
            Buy Grain
          </AppText>
        </View>

        <AppForm
          onSubmit={handleSubmit}
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
        >
          {error && (
            <ErrorMessage
              render={() => (
                <AppText style={styles.error} color={"danger"}>
                  {loginApi.data}
                </AppText>
              )}
            />
          )}

          <FormInput
            placeholder="email"
            name="email"
            icon="email"
            numberOfLines={1}
            textContentType="email-address"
            keyBoardType="email-address"
          />

          <FormInput
            placeholder="password"
            secureTextEntry={true}
            icon="lock"
            name="password"
            numberOfLines={1}
          />

          <SubmitButton
            color="primary"
            title="Login"
            // onPress={() => navigator.navigate("listings")}
          />
        </AppForm>
      </AppScreen>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },

  error: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 12,
  },

  logo: {
    width: 100,
    height: 70,
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary,
    padding: 5,
    borderRadius: 10,
    marginVertical: 20,
  },
});
