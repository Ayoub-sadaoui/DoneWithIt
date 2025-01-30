import React, { useState } from "react";
import * as Yup from "yup";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppFormPicker from "../components/forms/AppFormPicker";
import SubmitBtn from "../components/forms/SubmitBtn";
import CategoryItemPicker from "../components/CategoryItemPicker";

import AppFormimg from "../components/forms/AppFormimg";
import useLocation from "../hooks/useLocation";

function ListingEditScreen(props) {
  const location = useLocation();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(1000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, " at least add one..."),
  });
  const category = [
    {
      label: "Furniture",
      value: 1,
      bgcolor: "#A7D9D9",
      icon: "table-furniture",
    },
    { label: "Clothing", value: 2, bgcolor: "#F2BD1D", icon: "tshirt-crew" },
    { label: "Camera", value: 3, bgcolor: "#D92211", icon: "camera" },
  ];
  const [ctg, setCtg] = useState([0]);

  return (
    <AppForm
      initialValues={{
        title: "",
        price: "",
        description: "",
        category: null,
        images: [],
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      <AppFormimg name="images" />
      <AppFormField name="title" placeholder="Title" maxlength={255} />
      <AppFormField
        name="price"
        placeholder="Price"
        keyboardType="numeric"
        maxlength={8}
        width={120}
      />
      <AppFormPicker
        data={category}
        name="category"
        placeholder="Category"
        label={ctg}
        setCategory={setCtg}
        width="50%"
        PickerItmeComponent={CategoryItemPicker}
      />
      <AppFormField
        name="description"
        placeholder="Description"
        multiline
        maxlength={255}
        numberOfLines={3}
      />
      <SubmitBtn title="Post" />
    </AppForm>
  );
}

export default ListingEditScreen;
