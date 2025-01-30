import React from "react";
import { Text, View, StyleSheet } from "react-native";

function AppText({ placeholder, label }) {
  return (
    <View style={{ flex: 1, marginVertical: 10 }}>
      <Text style={[styles.apptext, { color: label.label ? "#111" : "#777" }]}>
        {label.label ? label.label : placeholder}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  apptext: {
    fontFamily: "roboto",
    fontSize: 16,
    color: "#777",
  },
});

export default AppText;
