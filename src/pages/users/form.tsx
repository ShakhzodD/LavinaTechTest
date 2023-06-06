import React from "react";
import { Formik, FastField } from "formik";
import { Fields } from "components";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  body: Yup.string().required("Required"),
});
const FormComponent = () => {
  return (
    <div>
      <Formik
        initialValues={{ title: "", body: "" }}
        validationSchema={SignupSchema}
        onSubmit={value => {
          console.log(value);
        }}
      >
        {({ values }) => {
          return (
            <>
              <FastField
                component={Fields.Input}
                name="title"
                rootClassName="mb-3"
              />
              <FastField component={Fields.Input} name="body" />
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormComponent;
