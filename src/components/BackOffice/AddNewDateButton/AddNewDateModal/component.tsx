import React, { useRef } from "react";
import { Dialog, Switch } from "@headlessui/react";
import { ModalProps } from "../types";
import { Formik, Form, Field, getIn, FieldProps } from "formik";

import * as Yup from "yup";
import moment from "moment";

const schema = Yup.object().shape({
  date: Yup.date().required("Required"),
  maxSeats: Yup.number().required("Required"),
  maxPerParty: Yup.number().required("Required"),
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

export const AddNewDateModal = ({
  isOpen,
  setIsOpen,
  handleNewDateSubmit,
}: ModalProps) => {
  let completeButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      as="div"
      initialFocus={completeButtonRef}
      className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto"
    >
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
      <div className="z-10 flex flex-col px-4 py-8 text-center text-gray-600 bg-white border-t-2 border-green-400 rounded-lg shadow-xl w-96 ">
        <Dialog.Title className="mb-4 text-2xl text-gray-600">
          Select a date and add a stamp
        </Dialog.Title>

        <Formik
          initialValues={{
            date: "",
            isStampable: false,
            maxSeats: 20,
            maxPerParty: 2,
          }}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            handleNewDateSubmit({
              ...values,
              date: moment(values.date).toISOString(),
            });
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {({ values, isSubmitting, setFieldValue }) => (
            <Form>
              <div className="items-center space-y-2 space-y-3 text-left">
                <div className="flex flex-col">
                  <span>Date: </span>
                  <Field
                    type="date"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    name="date"
                    placeholder="Date"
                  />
                  <div className="flex flex-col">
                    <span className="pl-2 mt-2 text-xs text-red-600">
                      <ErrorMessage name="date" />
                    </span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span>Seats: </span>
                  <Field
                    type="number"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    name="maxSeats"
                    placeholder="Available seats"
                  />
                  <div className="flex flex-col">
                    <span className="pl-2 mt-2 text-xs text-red-600">
                      <ErrorMessage name="maxSeats" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span>Party size: </span>
                  <Field
                    type="number"
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    name="maxPerParty"
                    placeholder="Max per party"
                  />
                  <div className="flex flex-col">
                    <span className="pl-2 mt-2 text-xs text-red-600">
                      <ErrorMessage name="maxPerParty" />
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span>Stamp: </span>
                  <Switch
                    checked={values.isStampable}
                    onChange={() =>
                      setFieldValue("isStampable", !values.isStampable)
                    }
                    className={`${
                      values.isStampable ? "bg-green-400" : "bg-gray-200"
                    } relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
                  >
                    <span className="sr-only">Enable isStampable</span>
                    <span
                      className={`${
                        values.isStampable ? "translate-x-6" : "translate-x-1"
                      } inline-block w-4 h-4 transform bg-white rounded-full`}
                    />
                  </Switch>
                </div>
              </div>
              <div className="mt-4 text-right">
                <button
                  className="inline-flex justify-center w-full px-4 py-2 m-4 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsOpen(false)}
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 my-4 text-base font-medium text-center text-white transition duration-200 ease-in bg-green-400 rounded-lg shadow-md hover:bg-green-600 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  ref={completeButtonRef}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Add date
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Dialog>
  );
};
