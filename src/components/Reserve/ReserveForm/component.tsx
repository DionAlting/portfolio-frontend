import React from "react";
import { Formik, Form, Field, FieldArray, getIn, FieldProps } from "formik";

import * as Yup from "yup";
import { ReserveFormProps } from "./types";
import moment from "moment";
import { Link } from "react-router-dom";

const schema = Yup.object().shape({
  dateId: Yup.string().required("Required"),
  reservationDetails: Yup.array()
    .of(
      Yup.object().shape({
        firstName: Yup.string().max(20, "too long").required("Required"),
        lastName: Yup.string().min(2, "too short").required("Required"),
      })
    )
    .min(1, "At least one person")
    .required("Must have party details"),
  comment: Yup.string().max(250, "Max 250 characters"),
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

export const ReserveForm = (props: ReserveFormProps) => {
  return (
    <div className="w-full">
      {props.isAuthenticated ? (
        <Formik
          initialValues={{
            dateId: "",
            reservationDetails: [
              {
                firstName: `${props.firstName || ""}`,
                lastName: `${props.lastName || ""} `,
              },
            ],
            comment: "",
          }}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            props.handleReservationSubmit(values);
            actions.setSubmitting(false);
          }}
        >
          {({ values, errors, isSubmitting }) => (
            <Form>
              <FieldArray
                name="reservationDetails"
                render={(arrayHelpers) => (
                  <div>
                    <div className="flex flex-col mt-10 mb-2">
                      <div className="relative ">
                        <h5 className="p-1 text-xs font-extrabold text-gray-700 dark:text-white sm:text-sm">
                          <span>Select a date and fill in the form</span>
                        </h5>
                        <Field
                          as="select"
                          name="dateId"
                          className="block px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm w-52 focus:outline-none focus:ring-green-500 focus:border-green-500"
                          InputProps={props.handleDateChange(values.dateId)}
                        >
                          <option value="" disabled selected>
                            Select date
                          </option>
                          {props.allDates.map((date) => (
                            <option
                              value={date.id}
                              disabled={date.bookedSeats >= date.maxSeats}
                            >
                              {moment(date.date).format("dddd DD MMMM")}
                            </option>
                          ))}
                        </Field>
                        <div className="flex flex-col">
                          <span className="pl-2 mt-2 text-xs text-red-600">
                            <ErrorMessage name="dateId" />
                          </span>
                        </div>
                      </div>
                    </div>
                    {props.singleDate && (
                      <>
                        <button
                          type="button"
                          className="px-4 py-2 my-4 text-base font-semibold text-center text-white transition duration-200 ease-in bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                          onClick={() =>
                            arrayHelpers.push({ firstName: "", lastName: "" })
                          }
                          disabled={
                            props.singleDate &&
                            values.reservationDetails.length >=
                              props.singleDate.maxPerParty
                          }
                        >
                          Add a person
                        </button>
                        <div className="flex flex-col">
                          <span className="pl-2 mb-2 text-xs text-red-600">
                            <ErrorMessage name={`reservationDetails`} />
                          </span>
                        </div>
                      </>
                    )}

                    {props.singleDate &&
                      values.reservationDetails &&
                      values.reservationDetails.map((detail, index) => (
                        <div className="flex flex-col mb-2">
                          <div className="flex gap-4 mb-2">
                            <div className="relative ">
                              <Field
                                className={`rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                                name={`reservationDetails[${index}].firstName`}
                                placeholder="First name"
                              />
                              <div className="flex flex-col">
                                <span className="pl-2 mt-2 text-xs text-red-600">
                                  <ErrorMessage
                                    name={`reservationDetails[${index}].firstName`}
                                  />
                                </span>
                              </div>
                            </div>

                            <div className="relative">
                              <Field
                                className={`rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                                name={`reservationDetails.${index}.lastName`}
                                placeholder="Last name"
                              />
                              <div className="flex flex-col">
                                <span className="pl-2 mt-2 text-xs text-red-600">
                                  <ErrorMessage
                                    name={`reservationDetails[${index}].lastName`}
                                  />
                                </span>
                              </div>
                            </div>

                            <div className="relative">
                              <button
                                type="button"
                                className="px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-red-400 rounded-lg shadow-md hover:bg-red-600 focus:ring-red-500 focus:ring-offset-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                                onClick={() => arrayHelpers.remove(index)}
                              >
                                X
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    {props.singleDate && (
                      <>
                        <div className="relative md:pr-10">
                          <Field
                            className={`rounded-lg mr-5 flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent`}
                            as="textarea"
                            name="comment"
                            placeholder="Comment"
                            cols={10}
                            rows={3}
                          />
                          <div className="flex flex-col">
                            <span className="pl-2 mb-2 text-xs text-red-600">
                              <ErrorMessage name="comment" />
                            </span>
                          </div>
                        </div>
                        <div>
                          <button
                            className="px-4 py-2 my-4 text-base font-semibold text-center text-white transition duration-200 ease-in bg-green-400 rounded-lg shadow-md hover:bg-green-600 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed "
                            type="submit"
                            disabled={isSubmitting}
                          >
                            Submit
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                )}
              />
            </Form>
          )}
        </Formik>
      ) : (
        <div className="bg-white dark:bg-gray-800 ">
          <div className="z-20 w-full px-4 py-6 mx-auto lg:flex lg:items-center lg:justify-between sm:px-6 lg:py-16 lg:px-8">
            <h2 className="font-extrabold text-gray-700 text-1xl dark:text-white sm:text-3xl">
              <span className="block">Reserve a seat?</span>
              <span className="block text-xl text-green-500">
                Login or Sign up now!
              </span>
            </h2>
            <div className="lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow ">
                <button
                  type="button"
                  className="w-full px-6 py-2 mt-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-green-500 rounded-lg shadow-md hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  <Link to="/login"> Login</Link>
                </button>
              </div>
              <div className="inline-flex ml-3 rounded-md shadow">
                <button
                  type="button"
                  className="w-full px-6 py-2 mt-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  <Link to="/signup"> Sign up</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
