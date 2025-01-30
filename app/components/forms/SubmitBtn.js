import React from "react";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

function SubmitBtn({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onpress={handleSubmit} />;
}

export default SubmitBtn;
