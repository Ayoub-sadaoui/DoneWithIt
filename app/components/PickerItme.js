import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

function PickerItme({ category, onpress }) {
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={styles.list}>
        <Text style={styles.text}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  list: {
    padding: 15,
  },
  text: {
    fontSize: 18,
    width: "100%",
  },
});
export default PickerItme;
