import React from "react";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AppCard({ title, subtitle, image, width = "100%", onPress }) {
  // console.log("AppCard image URL:", image); // Log the image URL
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.card, { width: width }]}>
        <View style={{ width: "100%", height: 200 }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{ uri: image }}
            onError={(e) =>
              console.log("Image load error:", e.nativeEvent.error)
            } // Log image load errors
          />
        </View>
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{title}</Text>
          <Text style={[styles.title, { color: colors.secondary }]}>
            {subtitle}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 10,
    display: "flex",
    elevation: 5,
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
});
export default AppCard;
