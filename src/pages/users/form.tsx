import React from "react";
import { Formik, FastField } from "formik";
import { Fields } from "components";
import * as Yup from "yup";
import { Button } from "antd";

const SignupSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  body: Yup.string().required("Required"),
});
const FormComponent = ({
  setModal,
  modal,
}: {
  setModal: Function;
  modal: object;
}) => {
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
              <div className="flex justify-end mt-5">
                <Button htmlType="button" onClick={() => {}}>
                  Add
                </Button>
                <Button type="primary">Add</Button>
              </div>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormComponent;
