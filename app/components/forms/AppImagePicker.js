import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  ScrollView,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../../config/colors";
import * as ImagePicker from "expo-image-picker";
import AppImage from "./AppImage";

import { useRef } from "react";

function AppImagePicker() {
  const [imgUri, setImgUri] = useState([]);

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      setImgUri([...imgUri, result.assets[0].uri]);
    }
  };

  const deleteimg = (index) => {
    const updatedUris = imgUri.filter((_, i) => i !== index);
    setImgUri(updatedUris);
    console.log(imgUri);
  };

  const deleteImage = (index) => {
    Alert.alert("Delete Image", "are u sure ", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => {
          deleteimg(index);
        },
      },
    ]);
  };

  // useEffect(() => {
  //   <Image source={{ uri: imgUri }} style={{ width: 100, height: 100 }} />;
  // }, [imgUri]);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.camera} onPress={selectImage}>
        <MaterialCommunityIcons name="camera" color={colors.black} size={50} />
      </TouchableOpacity>
      <FlatList
        horizontal
        data={imgUri}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <AppImage uri={item} index={index} handleDelete={deleteImage} />
        )}
        ItemSeparatorComponent={() => <View style={{ width: 10 }}></View>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,

    backgroundColor: "lighgrey",
  },
  camera: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
    borderRadius: 12,
    backgroundColor: colors.light,
  },
});
export default AppImagePicker;
