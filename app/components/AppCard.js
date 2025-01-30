import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";

function AppCard({ title, subtitle, image, width = "100%" }) {
  return (
    <View style={[styles.card, { width: width }]}>
      <View style={{ width: "100%", height: 200 }}>
        <Image style={{ width: "100%", height: "100%" }} source={image} />
      </View>
      <View style={{ padding: 20 }}>
        <Text style={styles.titel}>{title}</Text>
        <Text style={[styles.titel, { color: "cyan" }]}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flex: 1,
    borderRadius: 10,
    display: "flex",
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  titel: {
    fontSize: 20,
    fontWeight: "600",
  },
});
export default AppCard;
