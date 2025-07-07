import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={5}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View
        style={{
          position: "absolute",
          top: 50,
          alignItems: "center",
          gap: "20",
        }}
      >
        <Image
          source={require("../assets/logo-red.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.heading}>Sell what you don't need </Text>
      </View>
      <View style={{ width: "100%", paddingHorizontal: 20, paddingBottom: 20 }}>
        <AppButton
          title="login"
          onpress={() => navigation.navigate(routes.LOGIN)}
          color={colors.primary}
        />
        <AppButton
          title="register"
          color="dodgerblue"
          onpress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginBtn: {
    height: 70,
    width: "100%",
    backgroundColor: "blue",
  },
  registerBtn: {
    width: "100%",
    height: 70,
    backgroundColor: "tomato",
  },
  heading: {
    fontFamily: "roboto",
    fontSize: 22,
    fontWeight: "600",
    letterSpacing: 2,
    textAlign: "center",
  },
});
export default WelcomeScreen;
