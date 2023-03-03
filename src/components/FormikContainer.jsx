import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import * as Yup from "yup";

const FormikContainer = () => {
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];

  const radioOptions = [
    { key: "Option 1", value: "rOption1" },
    { key: "Option 2", value: "rOption2" },
    { key: "Option 3", value: "rOption3" },
    { key: "Option 4", value: "rOption4" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("required"),
    description: Yup.string().required("required"),
    selectOption: Yup.string().required("required"),
    radioOption: Yup.string().required("required"),
  });
  const onSubmit = (values) => console.log("form values", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />
          <FormikControl
            control="select"
            label="Select A Topic"
            name="selectOption"
            options={dropdownOptions}
          />
          <FormikControl
            control="radio"
            label="Radio Topic"
            name="radioOption"
            options={radioOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
