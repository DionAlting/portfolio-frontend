import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SignUpProps } from "./types";

const SignUpSchema = Yup.object().shape({
  displayName: Yup.string()
    .min(4, "Min 4 characters")
    .max(20, "Max 30 characters")
    .required("Username is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be 6 characters Min.")
    .required("Password is required"),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export const SignUpForm = ({
  handleSubmit,
  handleClickShowPassword,
  showPassword,
}: SignUpProps) => {
  const formik = useFormik({
    initialValues: {
      displayName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  return (
    <div className="mt-4">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col mb-2">
          <div className="relative ">
            <input
              id="displayName"
              type="text"
              name="displayName"
              className={`rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2  ${
                formik.errors.displayName ? "border border-red-500" : ""
              } focus:ring-green-600 focus:border-transparent`}
              placeholder="Username"
              onChange={formik.handleChange}
              value={formik.values.displayName}
            />
          </div>
          <div className="flex">
            {formik.touched.displayName && formik.errors.displayName ? (
              <p className="mt-2 text-xs text-red-600">
                {formik.errors.displayName}
              </p>
            ) : null}
          </div>
        </div>
        <div className="flex gap-4 mb-2">
          <div className="relative ">
            <input
              id="firstName"
              type="text"
              className={`rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2  ${
                formik.errors.firstName ? "border border-red-500" : ""
              } focus:ring-green-600 focus:border-transparent`}
              name="firstName"
              placeholder="First name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <div className="flex flex-col">
              {formik.touched.firstName && formik.errors.firstName ? (
                <p className="mt-2 text-xs text-red-600">
                  {formik.errors.firstName}
                </p>
              ) : null}
            </div>
          </div>

          <div className="relative ">
            <input
              id="lastName"
              type="text"
              className={`rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2  ${
                formik.errors.lastName ? "border border-red-500" : ""
              } focus:ring-green-600 focus:border-transparent`}
              name="lastName"
              placeholder="Last name"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            <div className="flex flex-col">
              {formik.touched.lastName && formik.errors.lastName ? (
                <p className="mt-2 text-xs text-red-600">
                  {formik.errors.lastName}
                </p>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div className="relative ">
            <input
              id="email"
              type="email"
              name="email"
              className={`rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2  ${
                formik.errors.email ? "border border-red-500" : ""
              } focus:ring-green-600 focus:border-transparent`}
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="flex flex-col">
            {formik.touched.email && formik.errors.email ? (
              <p className="mt-2 text-xs text-red-600">{formik.errors.email}</p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div className="relative ">
            <span className="absolute inset-y-0 flex items-center pl-2 right-1">
              <button
                type="button"
                onClick={handleClickShowPassword}
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                {showPassword ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  </>
                )}
              </button>
            </span>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              className={`rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2  ${
                formik.errors.password ? "border border-red-500" : ""
              } focus:ring-green-600 focus:border-transparent`}
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="flex flex-col">
            {formik.touched.password && formik.errors.password ? (
              <p className="mt-2 text-xs text-red-600">
                {formik.errors.password}
              </p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div className="relative ">
            <input
              id="passwordConfirm"
              type="password"
              name="passwordConfirm"
              className={`rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2  ${
                formik.errors.passwordConfirm ? "border border-red-500" : ""
              } focus:ring-green-600 focus:border-transparent`}
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              value={formik.values.passwordConfirm}
            />
          </div>
          <div className="flex flex-col">
            {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
              <p className="mt-2 text-xs text-red-600">
                {formik.errors.passwordConfirm}
              </p>
            ) : null}
          </div>
        </div>
        <div className="flex w-full my-4">
          <button
            type="submit"
            className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-green-400 rounded-lg shadow-md hover:bg-green-600 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            Sign up
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center mt-6">
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          Already have an account?
          <Link
            to="/login"
            className="ml-1 text-sm text-green-500 underline hover:text-green-600"
          >
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};
