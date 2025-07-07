import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";

function NewListingBtn({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={30}
          color={colors.white}
        />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 70,
    width: 70,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    bottom: 30,
    alignSelf: "center",
  },
});
export default NewListingBtn;
