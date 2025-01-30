import Screen from "../components/Screen";
import { Image, StyleSheet, View, Text } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../components/AppText";
import AppErrorMsg from "../components/forms/AppErrorMsg";
import AppFormField from "../components/forms/AppFormField";
import SubmitBtn from "../components/forms/SubmitBtn";
import AppForm from "../components/forms/AppForm";

function LoginScreen(props) {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <View style={styles.form}>
          <AppFormField
            name="email"
            icon="email"
            placeholder="email address"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormField
            name="password"
            icon="lock"
            placeholder="password"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="password"
            textContentType="password"
            secureTextEntry
          />
        </View>
        <View style={styles.btn}>
          <SubmitBtn title="Login" />
        </View>
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  logo: {
    alignSelf: "center",
    width: 100,
    height: 100,
    marginTop: 50,
  },
  form: {
    paddingHorizontal: 20,
    marginTop: 80,
    height: 100,
    gap: 10,
  },
  btn: {
    paddingHorizontal: 20,
    height: 100,
    width: "100%",
    marginTop: 280,
  },
});
export default LoginScreen;
