import React, { useContext } from "react";
import { useeFormikContext, useFormikContext } from "formik";
import AppTextInput from "../AppTextInput";
import AppErrorMsg from "./AppErrorMsg";
import AppPicker from "../AppPicker";
import { View } from "react-native";

function AppFormPicker({
  name,
  placeholder,
  label,
  setCategory,
  data,
  PickerItmeComponent,
  width,
  ...otherprops
}) {
  const {
    setFieldTouched,
    handleChange,

    touched,
    errors,
  } = useFormikContext();
  return (
    <View>
      <AppPicker
        placeholder={placeholder}
        label={label}
        width={width}
        PickerItmeComponent={PickerItmeComponent}
        setCategory={setCategory}
        data={data}
        onBlure={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherprops}
      />
      <AppErrorMsg error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default AppFormPicker;
