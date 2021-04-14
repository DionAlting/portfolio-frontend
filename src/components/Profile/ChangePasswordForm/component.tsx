import React from "react";
import { Formik, Form, Field, getIn, FieldProps } from "formik";

import * as Yup from "yup";

const schema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be 6 characters Min.")
    .required("Password is required"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const ErrorMessage = ({ name }: any) => (
  <Field name={name}>
    {({ form }: FieldProps) => {
      const error = getIn(form.errors, name);
      const touch = getIn(form.touched, name);
      return touch && error ? error : null;
    }}
  </Field>
);

export const ChangePasswordForm = () => {
  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          password: "",
          passwordConfirm: "",
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-2xl mx-auto mt-10 md:w-full">
            <hr />
            <div className="mt-5 space-y-6">
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">Change password</h2>
                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                  <div>
                    <div className="relative ">
                      <Field
                        className={`rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                        name="password"
                        placeholder="New Password"
                        type="password"
                      />
                      <div className="flex flex-col">
                        <span className="pl-2 mt-2 text-xs text-red-600">
                          <ErrorMessage name="password" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="relative ">
                      <Field
                        className={`rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                        name="passwordConfirm"
                        placeholder="Confirm Password"
                        type="password"
                      />
                      <div className="flex flex-col">
                        <span className="pl-2 mt-2 text-xs text-red-600">
                          <ErrorMessage name="passwordConfirm" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  Change
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
