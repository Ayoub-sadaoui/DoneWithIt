import { useState } from "react";
import { TextInput, View, StyleSheet, Text, Switch } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";

function AppTextInput({
  icon,
  placeholder,
  touched,
  width = "100%",
  ...otherProps
}) {
  const [txt, setTxt] = useState("");
  return (
    <View style={[styles.input, { width: width }]}>
      {icon && <MaterialCommunityIcons name={icon} size={24} color="#555" />}
      <TextInput
        placeholder={placeholder}
        style={[styles.text, { color: txt ? "#111" : "#777" }]}
        {...otherProps}
        onChangeText={(text) => setTxt(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    backgroundColor: colors.light,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingLeft: 15,
  },
  text: {
    width: "100%",
    fontSize: 16,
    color: "#333",
    fontFamily: "roboto",
  },
});

export default AppTextInput;
