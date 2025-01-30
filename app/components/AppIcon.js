import React from "react";
import { View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

function AppIcon({
  name = "email",
  backgroundColor = "dodgerblue",
  size = 40,
}) {
  return (
    <View
      style={{
        borderRadius: 200,
        backgroundColor: backgroundColor,
        height: size,
        width: size,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color="white" />
    </View>
  );
}

export default AppIcon;
