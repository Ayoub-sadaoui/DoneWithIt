import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function AppButton({ title = "Hello", onpress, color }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onpress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 1,
    height: 45,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 8,
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    letterSpacing: 1,
    fontFamily: "roboto",
    fontSize: 16,
    textTransform: "uppercase",
    fontWeight: "600",
  },
});
export default AppButton;
