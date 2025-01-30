import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

function AppImage({ uri, index, handleDelete }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleDelete(index)}>
        <Image
          source={{ uri: uri }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 8,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default AppImage;
