import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

function ListItemDelete({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.deletebtn}>
        <Text>
          <MaterialCommunityIcons
            name="delete-restore"
            size={24}
            color="white"
          />
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  deletebtn: {
    height: "90%",
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 4,
    marginRight: 10,
  },
});
export default ListItemDelete;
