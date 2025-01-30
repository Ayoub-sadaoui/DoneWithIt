import React from "react";
import { View, StyleSheet } from "react-native";
import AppImagePicker from "./AppImagePicker";
import AppErrorMsg from "./AppErrorMsg";
import { useFormikContext } from "formik";

function AppFormimg({ name, ...otherporps }) {
  const { errors } = useFormikContext();
  return (
    <View style={styles.container}>
      <AppImagePicker />
      <AppErrorMsg error={errors[name]} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default AppFormimg;
