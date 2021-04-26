import React from "react";
import { Formik, Form, Field, getIn, FieldProps } from "formik";

import * as Yup from "yup";
import { EditProfileFormProps } from "./types";

const schema = Yup.object().shape({
  email: Yup.string().required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  studyAssociationId: Yup.string().required("Required"),
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

export const EditProfileForm = (props: EditProfileFormProps) => {
  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          displayName: props.user.displayName || "",
          email: props.user.email || "",
          firstName: props.user.firstName || "",
          lastName: props.user.lastName || "",
          studyAssociationId: props.user.studyAssociation.id || "",
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          props.handleUpdateProfileSubmit(values);
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form className="z-0 max-w-2xl mx-auto mt-5 md:w-full">
            <div className="space-y-6">
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">Account</h2>
                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                  <div>
                    <div className="relative ">
                      <Field
                        className={`rounded-lg disabled:bg-gray-100 disabled:cursor-not-allowed flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                        name={`displayName`}
                        placeholder="Username"
                        disabled
                      />
                      <div className="flex flex-col">
                        <span className="pl-2 mt-2 text-xs text-red-600">
                          <ErrorMessage name={`displayName`} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="relative ">
                      <Field
                        className={`rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                        name={`email`}
                        placeholder="Email"
                      />
                      <div className="flex flex-col">
                        <span className="pl-2 mt-2 text-xs text-red-600">
                          <ErrorMessage name={`email`} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">Personal info</h2>
                <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                  <div>
                    <div className="relative ">
                      <Field
                        className={`rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                        name={`firstName`}
                        placeholder="First name"
                      />
                      <div className="flex flex-col">
                        <span className="pl-2 mt-2 text-xs text-red-600">
                          <ErrorMessage name={`firstName`} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="relative ">
                      <Field
                        className={`rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                        name={`lastName`}
                        placeholder="Last name"
                      />
                      <div className="flex flex-col">
                        <span className="pl-2 mt-2 text-xs text-red-600">
                          <ErrorMessage name={`lastName`} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="relative ">
                      <Field
                        as="select"
                        name="studyAssociationId"
                        className="block w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                      >
                        {props.studyAssociations.map((studyAssoc) => (
                          <option
                            key={studyAssoc.id}
                            value={studyAssoc.id}
                            disabled={
                              studyAssoc.id === props.user.studyAssociation.id
                            }
                          >
                            {studyAssoc.name}
                          </option>
                        ))}
                      </Field>
                      <div className="flex flex-col">
                        <span className="pl-2 mt-2 text-xs text-red-600">
                          <ErrorMessage name="studyAssociationId" />
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
                  className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  Update
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
