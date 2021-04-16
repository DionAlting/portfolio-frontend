import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginProps } from "./types";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const LoginForm = (props: loginProps) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      props.handleSubmit(values);
    },
  });
  return (
    <div className="mt-4">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col mb-2">
          <div className="relative flex ">
            <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-white border-t border-b border-l border-gray-300 shadow-sm rounded-l-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={`rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2  ${
                formik.errors.email ? "border border-red-500" : ""
              } focus:ring-green-600 focus:border-transparent`}
              placeholder="Your email"
            />
          </div>
          <div className="flex items-center justify-center">
            {formik.touched.email && formik.errors.email ? (
              <p className="mt-2 text-xs text-red-600">{formik.errors.email}</p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <div className="relative flex ">
            <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-white border-t border-b border-l border-gray-300 shadow-sm rounded-l-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>
            <span className="absolute inset-y-0 flex items-center pl-2 right-1">
              <button
                type="button"
                onClick={props.handleClickShowPassword}
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                {props.showPassword ? (
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
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              type={props.showPassword ? "text" : "password"}
              className={`rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent ${
                formik.errors.password ? "border border-red-500" : ""
              }`}
              placeholder="Your password"
            />
          </div>
          <div className="flex items-center justify-center">
            {formik.touched.password && formik.errors.password ? (
              <p className="mt-2 text-xs text-red-600">
                {formik.errors.password}
              </p>
            ) : null}
          </div>
        </div>
        <div className="flex w-full">
          <button
            type="submit"
            className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-green-400 rounded-lg shadow-md hover:bg-green-600 focus:ring-green-500 focus:ring-offset-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            Login
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center mt-6">
        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          Don't have an account?
          <Link
            to="/signup"
            className="ml-1 text-sm text-green-500 underline hover:text-green-600"
          >
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};
