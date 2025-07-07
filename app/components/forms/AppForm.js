import React from "react";
import { Formik } from "formik";
import { View, StyleSheet } from "react-native";

function AppForm({ intialValues, onSubmit, validationSchema, children }) {
  return (
    <Formik
      initialValues={intialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <View style={styles.container}>{children}</View>}
    </Formik>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 10,
    backgroundColor: "#fff",
    marginTop: 40,
  },
});
export default AppForm;
