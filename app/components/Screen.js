import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import constants from "expo-constants";
function Screen({ children, style }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default Screen;
