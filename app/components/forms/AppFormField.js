import React, { useContext } from "react";
import { useeFormikContext, useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";
import AppErrorMsg from "./AppErrorMsg";

function AppFormField({ name, placeholder, width, ...otherprops }) {
  const { setFieldTouched, handleChange, touched, errors, handleSubmit } =
    useFormikContext();
  return (
    <>
      <AppTextInput
        placeholder={placeholder}
        touched={touched}
        width={width}
        // icon="email"
        // placeholder="email address"
        // autoCapitalize="none"
        // autoCorrect={false}
        // keyboardType="email-address"
        // textContentType="emailAddress"
        onBlure={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherprops}
      />
      <AppErrorMsg error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
