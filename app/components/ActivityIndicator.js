import React from "react";
import LottieView from "lottie-react-native";

function AppActivityIndicator({ visible = false }) {
  if (!visible) return null;
  return (
    <LottieView
      source={require("../assets/animations/loader.json")}
      loop
      autoPlay
    />
  );
}

export default AppActivityIndicator;
