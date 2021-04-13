import React from "react";
import { Formik, Form, Field, getIn, FieldProps } from "formik";
import { Link } from "react-router-dom";

import * as Yup from "yup";
import { RequestFormProps } from "./types";

const schema = Yup.object().shape({
  artist: Yup.string().max(30, "Max 30 characters").required("Required"),
  title: Yup.string().max(30, "Max 30 characters").required("Required"),
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

export const RequestForm = (props: RequestFormProps) => {
  return (
    <div className="mt-10">
      {props.isAuthenticated ? (
        <Formik
          initialValues={{
            artist: "",
            title: "",
          }}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            props.handleRequestSubmit(values);
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <div className="flex flex-col mb-2">
                  <div className="flex gap-4 mb-2">
                    <div className="relative ">
                      <Field
                        className={`rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                        name={`artist`}
                        placeholder="Artist"
                      />
                      <div className="flex flex-col">
                        <span className="pl-2 mt-2 text-xs text-red-600">
                          <ErrorMessage name={`artist`} />
                        </span>
                      </div>
                    </div>

                    <div className="relative">
                      <Field
                        className={`rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                        name={`title`}
                        placeholder="Title"
                      />
                      <div className="flex flex-col">
                        <span className="pl-2 mt-2 text-xs text-red-600">
                          <ErrorMessage name={`title`} />
                        </span>
                      </div>
                    </div>

                    <div className="relative">
                      <button
                        className="px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-green-400 rounded-lg shadow-md hover:bg-green-600 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed "
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Request
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <div>
          <h2 className="font-extrabold text-gray-700 text-1xl dark:text-white sm:text-3xl">
            <span className="block text-xl">Request a song?</span>
            <span className="block text-green-500">Login or Sign up now!</span>
          </h2>
          <div className="mt-4 lg:mt-4 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow ">
              <button
                type="button"
                className="w-full px-6 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-green-500 rounded-lg shadow-md hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                <Link to="/login"> Login</Link>
              </button>
            </div>
            <div className="inline-flex ml-3 rounded-md shadow">
              <button
                type="button"
                className="w-full px-6 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                <Link to="/signup"> Sign up</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
