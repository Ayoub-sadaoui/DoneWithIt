import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";
import colors from "../../config/colors";

function SubmitBtn({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} color={colors.primary} />;
}

export default SubmitBtn;
