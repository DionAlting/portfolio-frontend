import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

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

export const SignUpForm = () => {
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
      console.log(values);
    },
  });
  console.log(formik.errors);
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
              <p className="text-red-600 text-xs mt-2">
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
                <p className="text-red-600 text-xs mt-2">
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
                <p className="text-red-600 text-xs mt-2">
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
              <p className="text-red-600 text-xs mt-2">{formik.errors.email}</p>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div className="relative ">
            <input
              id="password"
              type="password"
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
              <p className="text-red-600 text-xs mt-2">
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
              <p className="text-red-600 text-xs mt-2">
                {formik.errors.passwordConfirm}
              </p>
            ) : null}
          </div>
        </div>
        <div className="flex w-full my-4">
          <button
            type="submit"
            className="py-2 px-4  bg-green-400 hover:bg-green-600 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
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
            className="text-sm text-green-500 underline hover:text-green-600 ml-1"
          >
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};
