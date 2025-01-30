import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

function CategoryItemPicker({ category, onpress, icon, backgroundColor }) {
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={styles.item}>
        <View style={[styles.bgicon, { backgroundColor: backgroundColor }]}>
          <MaterialCommunityIcons name={icon} size={26} color="#fff" />
        </View>
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
    fontSize: 14,
  },
  bgicon: {
    borderRadius: 100,
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    alignItems: "center",
    width: 100,
    gap: 5,
    marginTop: 10,
  },
});
export default CategoryItemPicker;
