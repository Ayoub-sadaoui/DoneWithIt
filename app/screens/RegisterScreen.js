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
import routes from "../navigation/routes";

function LoginScreen({ navigation }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => navigation.navigate(routes.LISTINGS, values)}
        validationSchema={validationSchema}
      >
        <View style={styles.form}>
          <AppFormField
            name="Name"
            icon="account"
            placeholder="Full name"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
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
          <SubmitBtn title="Register" />
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
    marginTop: 30,
  },
  form: {
    marginTop: 80,
    height: 100,
    gap: 10,
  },
  btn: {
    height: 100,
    width: "100%",
    marginTop: 80,
  },
});
export default LoginScreen;
